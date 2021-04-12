import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { TypeORMExceptionFilter } from './filters/typeorm-exceptions.filter';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Nest Workshop')
    .setDescription('Nest Workshop')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.useGlobalFilters(new TypeORMExceptionFilter());
//   await app.listen(3000);
// }
// bootstrap();
