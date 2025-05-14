import { Inject, Injectable } from '@nestjs/common';
import { UserProfileCopyEntity } from 'src/infra/database/postgres/entities/userProfileCopy.entity';
import { UserProfileEntity } from 'src/infra/database/postgres/entities/userProfiles.entity';
import { USER_PROFILE_COPY_REPOSITORY, USER_PROFILE_REPOSITORY } from 'src/utils/constant/core';
import { REDIS_CHANNEL } from 'src/utils/enums/redisChannel.enum';
import { ResponseService } from 'src/utils/handler/responseHandler';
import { RedisPublisherService } from 'src/utils/reidsPubSub/reidsPublisher';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService extends ResponseService {
    constructor(
        @Inject(USER_PROFILE_REPOSITORY)
        private readonly userProfileRepo : Repository<UserProfileEntity>,

        @Inject(USER_PROFILE_COPY_REPOSITORY)
        private readonly userProfileCopyRepo : Repository<UserProfileCopyEntity>,

        private readonly redisPublisher : RedisPublisherService
    ){
        super();
    }

    create = async(user : string, userClass : string, age : number, email : string) => {
        const userObj = this.userProfileRepo.create({
            user,
            class : userClass,
            age,
            email
        });

        const userData = await this.userProfileRepo.save(userObj);
        await this.redisPublisher.publish(REDIS_CHANNEL.USER_PROFILE, userData);
        return this.serviceResponse(userData, "User is created");
    }

    getUserProfile = async() => {
        const userData = await this.userProfileRepo.find();
        return this.serviceResponse(userData, "✅ User profile fetched successfully.")
    }

    getUserProfileCopy = async() => {
        const userData = await this.userProfileCopyRepo.find();
        return this.serviceResponse(userData, "✅ User profile copy fetched successfully.")
    }
}
