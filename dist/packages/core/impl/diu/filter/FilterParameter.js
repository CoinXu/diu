"use strict";
/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description IFilterParameter
 */
Object.defineProperty(exports, "__esModule", { value: true });
class FilterParameter {
    constructor(config) {
        this.config = config;
        this.names = [];
        for (const name in config.parameter) {
            this.names.push(name);
        }
    }
    getInitParameter(name) {
        return this.config.parameter[name];
    }
    getInitParameterNames() {
        return this.names;
    }
}
exports.FilterParameter = FilterParameter;
//# sourceMappingURL=FilterParameter.js.map