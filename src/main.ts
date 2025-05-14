import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getAppConfig } from './config/app.config';

const {port, apiPrefix} = getAppConfig();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix(apiPrefix);
    await app.listen(port);
}
bootstrap();
