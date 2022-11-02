import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './mail/mail.module';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [MailModule, PrismaModule, ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
