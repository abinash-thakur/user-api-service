import { getAppConfig } from 'src/config/app.config';
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const {host, port, user, password, name} = getAppConfig().database.postgres;

export const AppDataSource = new DataSource({
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
});
