import { Module } from "@nestjs/common";

import { ResPartnerController } from './respartner.controller';
import { ResPartnerService } from './respartner.service';

@Module({
    controllers: [ResPartnerController],
    providers: [ResPartnerService],
})
export class ResPartnerModule {}