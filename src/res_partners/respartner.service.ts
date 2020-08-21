import { Injectable } from '@nestjs/common';
import { resolve } from 'path';
import { rejects } from 'assert';
var Odoo = require('odoo-xmlrpc');


@Injectable()
export class ResPartnerService {
    
    async getPartners() {
        let getPartnerPromise = new Promise(function(resolve, rejects) {
            let odoo = new Odoo({
                url: "localhost",
                port: "8069",
                db: "odoo1",
                username: "admin",
                password: "admin",
            })
            
            odoo.connect((err) => {
                if (err) {
                    rejects(err);
                    return console.log(err)
                }
                console.log("Connected to Odoo Server");
                var inparams = [[], ['name', 'phone', 'mobile', 'id']]
                var params = []
                params.push(inparams)
                odoo.execute_kw('res.partner', 'search_read', params, function (err, value) {
                    if (err) {
                        rejects(err);
                        return console.log(err);
                    }
                    resolve(value)
                });
            })
        })
        let result = await getPartnerPromise;
        return result
    }

    async updatePartners(id: number, values: {}) {
        let getPartnerPromise = new Promise(function(resolve, rejects) {
            let odoo = new Odoo({
                url: "localhost",
                port: "8069",
                db: "odoo1",
                username: "admin",
                password: "admin",
            })
            
            odoo.connect((err) => {
                if (err) {
                    rejects(err);
                    return console.log(err)
                }
                console.log("Connected to Odoo Server");
                var inparams = [[id], values]
                var params = []
                params.push(inparams)
                odoo.execute_kw('res.partner', 'write', params, function (err, value) {
                    if (err) {
                        rejects(err);
                        return console.log(err);
                    }
                    resolve(value)
                });
            })
        })

        let result = await getPartnerPromise;
        return result
    }

}