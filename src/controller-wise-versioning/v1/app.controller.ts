import { Controller, Get, Version } from '@nestjs/common';
import { AppServiceV1 } from './app.service';

@Controller({ path: 'controller-wise-versioning', version: '1' })
export class AppControllerV1 {
  constructor(private readonly appService: AppServiceV1) {}

  @Get('/getMethod1')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/getMethod2')
  getHello2(): string {
    return this.appService.getHello();
  }
}
