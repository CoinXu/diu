"use strict";
/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description ClassInstanceFactory
 */
Object.defineProperty(exports, "__esModule", { value: true });
function singletonClassInstanceFactory(Constructor) {
    let instance = null;
    return {
        getInstance() {
            if (instance === null) {
                instance = new Constructor();
            }
            return instance;
        }
    };
}
exports.singletonClassInstanceFactory = singletonClassInstanceFactory;
//# sourceMappingURL=SingletonClassInstanceFactory.js.map