"use strict";
/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description ClassInstanceFactory
 */
Object.defineProperty(exports, "__esModule", { value: true });
function classInstanceFactory(Constructor) {
    return {
        newInstance() {
            return new Constructor();
        }
    };
}
exports.classInstanceFactory = classInstanceFactory;
//# sourceMappingURL=ClassInstanceFactory.js.map