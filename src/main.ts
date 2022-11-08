import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // validationのパイプをグローバルに使う（whitelist:trueでDTOにcreateを実行した時にDTOに書かれているプロパティ以外は削除する）
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  //Swagger作成
  const config = new DocumentBuilder()
    .setTitle('Median')
    .setDescription('The Median API description')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //アプリ起動
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
