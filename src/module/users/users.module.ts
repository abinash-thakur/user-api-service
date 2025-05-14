import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userProfileProvider } from 'src/infra/database/postgres/provider/userProfile.provider';
import { DatabaseModule } from 'src/config/db/postgres/database.module';
import { RedisPublisherService } from 'src/utils/reidsPubSub/reidsPublisher';
import { userProfileCopyProvider } from 'src/infra/database/postgres/provider/userProfileCopy.provider';

@Module({
    imports : [DatabaseModule],
    providers: [
        UsersService,
        userProfileProvider,
        userProfileCopyProvider,
        RedisPublisherService
    ],
    controllers: [UsersController]
})
export class UsersModule { }
