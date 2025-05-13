import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DATA_SOURCE } from 'src/utils/constant/core';
import { getAppConfig } from 'src/config/app.config';

const {host, port, user, password, name} = getAppConfig().database.postgres;

export const databaseProviders = {
    provide : DATA_SOURCE,
    useFactory: async () => {
        const dataSource = new DataSource({
            type: 'postgres',
            host,
            port,
            username: user,
            password,
            database: name,
            entities: ['dist/infra/database/postgres/entities/*.entity.{js,ts}'],
            migrations: ['dist/infra/database/postgres/migrations/*.{js,ts}'],
            migrationsRun: false,
            namingStrategy: new SnakeNamingStrategy(),
            synchronize: false,
            logging: true,
        } as DataSourceOptions);

        return dataSource.initialize();
    },
};
