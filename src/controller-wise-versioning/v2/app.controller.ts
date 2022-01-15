import { Controller, Get, Version } from '@nestjs/common';
import { AppServiceV2 } from './app.service';

@Controller({ path: 'controller-wise-versioning', version: '2' })
export class AppControllerV2 {
  constructor(private readonly appService: AppServiceV2) {}

  @Get('/getMethod1')
  getHello(): string {
    return this.appService.getHello();
  }
}
