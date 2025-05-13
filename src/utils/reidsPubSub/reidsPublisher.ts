import { Injectable, Logger } from '@nestjs/common';
import { RedisService } from 'src/config/db/redis/redis.service';

@Injectable()
export class RedisPublisherService {
    constructor(private readonly redisService: RedisService) { }

    async publish(channelName: string, data: unknown) {
        Logger.log(`Redis publisher triggered for channel: ${JSON.stringify(data)}`);
        await this.redisService.publisher.publish(channelName, JSON.stringify(data));
    }
}
