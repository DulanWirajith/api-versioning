import { Module } from '@nestjs/common';
import { AppController } from './end-point-wise-versioning/app.controller';
import { AppService } from './end-point-wise-versioning/app.service';
import { AppControllerV1 } from './controller-wise-versioning/v1/app.controller';
import { AppControllerV2 } from './controller-wise-versioning/v2/app.controller';
import { AppServiceV1 } from './controller-wise-versioning/v1/app.service';
import { AppServiceV2 } from './controller-wise-versioning/v2/app.service';

@Module({
  imports: [],
  controllers: [AppController, AppControllerV1, AppControllerV2],
  providers: [AppService, AppServiceV1, AppServiceV2],
})
export class AppModule {}
