import { Injectable, Logger } from '@nestjs/common';
import { RedisService } from 'src/config/db/redis/redis.service';

@Injectable()
export class RedisPublisherService {
    private readonly logger = new Logger(RedisPublisherService.name);

    constructor(private readonly redisService: RedisService) { }

    async publish(channelName: string, data: unknown) {
        this.logger.log(`Redis publisher triggered for channel: ${channelName}`);
        await this.redisService.publisher.publish(channelName, JSON.stringify(data));
    }
}
