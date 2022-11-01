import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './mail/mail.module';
import { RecruitmentModule } from './recruitment/recruitment.module';

@Module({
  imports: [MailModule, RecruitmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
