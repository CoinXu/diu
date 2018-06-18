"use strict";
/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/06/18
 * @description Filter Helper
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ClassLoader_1 = require("../../verbose/ClassLoader");
const FilterParameter_1 = require("./FilterParameter");
class FilterHelper {
    static async load(config) {
        const loaded = ClassLoader_1.ClassLoader.loadSingleton(config.path, config.name);
        const filter = loaded.getInstance();
        const success = await filter.init(new FilterParameter_1.FilterParameter(config));
        if (!success) {
            throw new Error(`Filter ${filter.getName()} install fault`);
        }
        return filter;
    }
}
exports.FilterHelper = FilterHelper;
;
//# sourceMappingURL=FilterHelper.js.map