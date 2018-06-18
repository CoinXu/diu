"use strict";
/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/06/18
 * @description
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    log(...args) {
        console.log.apply(console, args);
    }
    info(...args) {
        console.info.apply(console, args);
    }
    warn(...args) {
        console.warn.apply(console, args);
    }
    error(...args) {
        console.error.apply(console, args);
    }
}
exports.Logger = Logger;
;
//# sourceMappingURL=Logger.js.map