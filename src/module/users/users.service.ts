import { Inject, Injectable } from '@nestjs/common';
import { UserProfileEntity } from 'src/infra/database/postgres/entities/userProfiles.entity';
import { USER_PROFILE_REPOSITORY } from 'src/utils/constant/core';
import { REDIS_CHANNEL } from 'src/utils/enums/redisChannel.enum';
import { ResponseService } from 'src/utils/handler/responseHandler';
import { RedisPublisherService } from 'src/utils/reidsPubSub/reidsPublisher';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService extends ResponseService {
    constructor(
        @Inject(USER_PROFILE_REPOSITORY)
        private readonly userProfileRepo : Repository<UserProfileEntity>,
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
        return this.serviceResponse(userData, "✅ User profile retrieved successfully.")
    }
}
