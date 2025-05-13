import Redis from 'ioredis';
import { getAppConfig } from 'src/config/app.config';

const {host, port, password} = getAppConfig().database.redis;

const redisConnection = {
    host,
    port,
    password
}

export const publisher = new Redis({...redisConnection, lazyConnect : true});
export const subScriber = new Redis({...redisConnection, lazyConnect : true});