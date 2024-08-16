import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4900);
  console.log(`Application is running on: http://localhost:4900`);
}
bootstrap();
