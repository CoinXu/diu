"use strict";
/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description DiuContext
 */
Object.defineProperty(exports, "__esModule", { value: true });
const HttpRequest_1 = require("../http/HttpRequest");
const HttpResponse_1 = require("../http/HttpResponse");
function createContext(req, res) {
    return {
        request: new HttpRequest_1.HttpRequest(req),
        response: new HttpResponse_1.HttpResponse(res)
    };
}
exports.createContext = createContext;
//# sourceMappingURL=Context.js.map