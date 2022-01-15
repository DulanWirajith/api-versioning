import { Injectable } from '@nestjs/common';

@Injectable()
export class AppServiceV1 {
  getHello(): string {
    return 'Hello World!';
  }
}
