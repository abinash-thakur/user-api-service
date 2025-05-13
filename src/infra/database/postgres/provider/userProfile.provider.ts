import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { DATA_SOURCE, USER_PROFILE_REPOSITORY } from 'src/utils/constant/core';
import { UserProfileEntity } from '../entities/userProfiles.entity';

export const userProfileProvider: Provider = {
    provide: USER_PROFILE_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserProfileEntity),
    inject: [DATA_SOURCE],
};
