import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { DATA_SOURCE, USER_PROFILE_COPY_REPOSITORY } from 'src/utils/constant/core';
import { UserProfileCopyEntity } from '../entities/userProfileCopy.entity';

export const userProfileCopyProvider: Provider = {
    provide: USER_PROFILE_COPY_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserProfileCopyEntity),
    inject: [DATA_SOURCE],
};
