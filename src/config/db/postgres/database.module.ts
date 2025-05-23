// database.module.ts
import { Module } from '@nestjs/common';
import { databaseProviders } from './db.config';

@Module({
    providers: [databaseProviders],
    exports: [databaseProviders],
})
export class DatabaseModule { }
