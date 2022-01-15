import { Injectable } from '@nestjs/common';

@Injectable()
export class AppServiceV2 {
  getHello(): string {
    return 'Hello World!';
  }
}
