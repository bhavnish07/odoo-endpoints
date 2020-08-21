import { Controller, Get, Post, Body } from '@nestjs/common'
import { ResPartnerService } from "./respartner.service"

@Controller("/respartners")
export class ResPartnerController {
    constructor(private readonly resPartnerService: ResPartnerService) { }

    @Get()
    getPartners() {
        return this.resPartnerService.getPartners();
    }

    @Post("/update")
    updatePartners(@Body('id') resPartnerId: number, @Body('values') values) {
        return this.resPartnerService.updatePartners(resPartnerId, values);
    }

}