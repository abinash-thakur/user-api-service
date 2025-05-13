import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import Redis from 'ioredis';
import { getAppConfig } from 'src/config/app.config';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
    public publisher: Redis;
    public subscriber: Redis;

    onModuleInit() {
        const { host, port, password } = getAppConfig().database.redis;

        this.publisher = new Redis({
            host,
            port,
            password,
            lazyConnect: false,
        });
        Logger.log('Redis connections initialized');
    }

    onModuleDestroy() {
        this.publisher?.disconnect();
        this.subscriber?.disconnect();
    }
}
