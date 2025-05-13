import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getServerHealth(): string {
        return 'Server is running....';
    }
}
