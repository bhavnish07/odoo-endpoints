import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ResPartnerModule } from './res_partners/respartner.module'

@Module({
  imports: [ResPartnerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
