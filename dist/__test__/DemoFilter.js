"use strict";
/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description DemoFilter
 */
Object.defineProperty(exports, "__esModule", { value: true });
const SingletonClassInstanceFactory_1 = require("../packages/core/impl/verbose/SingletonClassInstanceFactory");
class DemoFilter {
    async init(parameter) {
        const names = parameter.getInitParameterNames();
        const name = this.getName();
        for (const n of names) {
            console.log(`Filter [${names}] parameter.${name} value is: ${parameter.getInitParameter(n)}`);
        }
        return true;
    }
    async action(context, manager) {
        context.response.getServerResponse().end("ok");
        await manager.next();
        return this;
    }
    getName() {
        return "TestFilter";
    }
}
exports.DemoFilter = DemoFilter;
exports.default = SingletonClassInstanceFactory_1.singletonClassInstanceFactory(DemoFilter);
//# sourceMappingURL=DemoFilter.js.map