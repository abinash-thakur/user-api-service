import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { envValidationSchema } from './config/env.validation';
import { UsersModule } from './module/users/users.module';
import { DatabaseModule } from './config/db/postgres/database.module';
import { RedisModule } from './config/db/redis/reids.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: envValidationSchema,
        }),
        DatabaseModule,
        RedisModule,
        UsersModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
