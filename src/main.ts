import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getAppConfig } from './config/app.config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';

const { port, apiPrefix } = getAppConfig();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const logger = new Logger(bootstrap.name);

    // Set global route prefix
    app.setGlobalPrefix(apiPrefix);

    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true
    }));

    // Swagger Configuration
    const config = new DocumentBuilder()
        .setTitle('API Documentation for user profile')
        .setDescription('Auto-generated Swagger documentation for the API')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(`${apiPrefix}docs`, app, document);

    await app.listen(port);
    logger.log(`🚀 Application is running on: http://localhost:${port}/${apiPrefix}`);
    logger.log(`📚 Swagger docs available at: http://localhost:${port}/${apiPrefix}docs`);
}
bootstrap();
