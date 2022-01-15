import { Controller, Get, Version } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('end-point-wise-versioning')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Version('1')
  @Get('/getMethod1')
  getHello(): string {
    return this.appService.getHello();
  }

  @Version('2')
  @Get('/getMethod1')
  getHello2(): string {
    return this.appService.getHello();
  }
}
