"use strict";
/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/06/18
 * @description DemoService
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = require("../packages/core/impl/diu/Service");
const SingletonClassInstanceFactory_1 = require("../packages/core/impl/verbose/SingletonClassInstanceFactory");
class DemoService extends Service_1.Service {
    async service(context) {
        context.response.getOutputStream().end("\nDemo service output some content");
    }
}
exports.DemoService = DemoService;
exports.default = SingletonClassInstanceFactory_1.singletonClassInstanceFactory(DemoService);
//# sourceMappingURL=DemoService.js.map