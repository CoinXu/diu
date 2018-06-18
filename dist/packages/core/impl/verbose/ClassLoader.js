"use strict";
/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description ClassLoader
 */
Object.defineProperty(exports, "__esModule", { value: true });
class ClassLoader {
    /**
     * 加载类
     * @param {string} path
     * @param {string} name
     * @return {ClassInstance<T>}
     */
    static load(path, name = "default") {
        const module = require(path);
        const ins = module[name];
        if (typeof ins.newInstance !== "function") {
            throw new TypeError(`${name}.newInstance is not a function`);
        }
        return ins;
    }
    /**
     * 加载单例类
     * @param {string} path
     * @param {string} name
     * @return {SingletonClassInstance<T>}
     */
    static loadSingleton(path, name = "default") {
        const module = require(path);
        const ins = module[name];
        if (typeof ins.getInstance !== "function") {
            throw new TypeError(`${name}.getInstance is not a function`);
        }
        return ins;
    }
}
exports.ClassLoader = ClassLoader;
//# sourceMappingURL=ClassLoader.js.map