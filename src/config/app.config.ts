// app.config.ts
import { ConfigService } from '@nestjs/config';
import { AppConfig } from './app-config.interface';
import * as dotenv from 'dotenv';

dotenv.config(); // Load .env

// Instantiate ConfigService
const config = new ConfigService();

export const getAppConfig = (): AppConfig => ({
    nodeEnv: config.get<string>('NODE_ENV') || 'development',
    port: config.get<number>('APP_PORT') || 8082,
    apiPrefix: config.get<string>('API_PREFIX')!,

    database: {
        postgres: {
            host: config.get<string>('DB_HOST') || 'localhost',
            port: config.get<number>('DB_PORT') || 5469,
            user: config.get<string>('DB_USER') || 'postgres',
            password: config.get<string>('DB_PASSWORD') || 'postgres',
            name: config.get<string>('DB_NAME') || 'user_receiver_db'
        },
        redis : {
            host : config.get<string>('REDIS_HOST') || 'localhost',
            port : config.get<number>('REDIS_PORT') || 6379,
            password : config.get<string>('REDIS_PASSWORD') || 'localhost',
        }
    },
});
