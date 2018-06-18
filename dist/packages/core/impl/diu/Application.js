"use strict";
/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description Application
 */
Object.defineProperty(exports, "__esModule", { value: true });
const FilterManager_1 = require("./filter/FilterManager");
const http_1 = require("http");
const Context_1 = require("./Context");
const Service_1 = require("./Service");
const HttpStatus_1 = require("../http/HttpStatus");
const FilterHelper_1 = require("./filter/FilterHelper");
class Application {
    constructor(config, server) {
        this.config = config;
        this.filters = [];
        this.services = [];
        this.server = server || http_1.createServer();
    }
    async load() {
        // 1. load filters
        for (const config of this.config.application.filter) {
            const filter = await FilterHelper_1.FilterHelper.load(config);
            this.filters.push(filter);
        }
        // 2. load services
        for (const serviceConfig of this.config.application.services) {
            this.services.push({
                route: serviceConfig.route,
                service: Service_1.Service.load(serviceConfig)
            });
        }
        return this;
    }
    async bootstrap() {
        await this.load();
        this.listen(this.config.server.port, this.config.server.host);
        return this;
    }
    start(callback) {
        this.bootstrap().then(callback).catch(callback);
        return this;
    }
    listen(port, host) {
        this.server.on("request", async (req, res) => {
            const context = Context_1.createContext(req, res);
            const manager = new FilterManager_1.FilterManager(context, this.filters);
            // 1. invoke filter
            manager.next().catch(function (error) {
                context.response.setStatus(HttpStatus_1.HttpStatus.INTERNAL_SERVERERROR.code);
                context.response.getOutputStream().write(error.message);
            });
            // 2. invoke services
            for (const cache of this.services) {
                console.log(`request url: ${req.url}`);
                if (typeof req.url === "string" && Service_1.Service.match(req.url, cache.route)) {
                    await cache.service.service(context);
                }
            }
        });
        this.server.listen(port, host);
        return this;
    }
}
exports.Application = Application;
//# sourceMappingURL=Application.js.map