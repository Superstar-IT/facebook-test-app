import {
  ClassSerializerInterceptor,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';

import { AppModule } from './app.module';
import validationOptions from './core/validators/validation-options';
import { NotificationsService } from './notifications/notifications.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  const configService = app.get(ConfigService);

  app.enableCors({ origin: '*' });
  app.setGlobalPrefix(configService.get('app.apiPrefix'));
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalPipes(new ValidationPipe(validationOptions));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  const notificationService = app.get<NotificationsService>(NotificationsService);
  await notificationService.addDummyData();


  const apiDocConfig = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('This documentation is for test')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const apiDoc = SwaggerModule.createDocument(app, apiDocConfig, {
    include: [],
  });

  SwaggerModule.setup('api/document', app, apiDoc);

  await app.listen(configService.get('app.port'));
}
bootstrap();
