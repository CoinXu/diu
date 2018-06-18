"use strict";
/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/06/18
 * @description Basic Service
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ClassLoader_1 = require("../verbose/ClassLoader");
class Service {
    static load(config) {
        const loaded = ClassLoader_1.ClassLoader.loadSingleton(config.path, config.name);
        const service = loaded.getInstance();
        return service;
    }
    /**
     * p1是否能匹配p2，如果匹配，返回true，反之为false。
     * @param {string} p1
     * @param {string} p2
     * @return {boolean}
     *
     * @example
     * match("/a/b", "/a/b") => true
     * TODO
     * match("/a/b", "/a/:b") => true
     */
    static match(p1, p2) {
        // 目前只匹配相等，不理会query
        const i = p1.indexOf("?");
        if (i > 0) {
            p1 = p1.slice(0, i);
        }
        return p1 === p2;
    }
    getName() {
        return this.constructor.name;
    }
    async service(context) {
        // TODO throw a server error such as 500
        context.response.getOutputStream().end(`${this.getName()} not implement`);
    }
}
exports.Service = Service;
;
//# sourceMappingURL=Service.js.map