import { Controller, Get } from '@nestjs/common';
import { RecruitmentService } from './recruitment.service';
@Controller('recruitment')
export class RecruitmentController {
  constructor(private readonly recruitmentService: RecruitmentService) {}

  @Get('/connectdbtest')
  getSampleData() {
    return this.recruitmentService.getSampleData();
  }
}
