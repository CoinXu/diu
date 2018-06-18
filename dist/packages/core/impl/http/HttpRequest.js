"use strict";
/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description HttpRequest
 */
Object.defineProperty(exports, "__esModule", { value: true });
class HttpRequest {
    constructor(request) {
        this.request = request;
        this.names = [];
        for (const propKey in request.headers) {
            this.names.push(propKey);
        }
    }
    getAttribute(name) {
        const value = this.request.headers[name] || "";
        return Array.isArray(value) ? value.toString() : value;
    }
    getAttributeNames() {
        return this.names;
    }
    // content
    getContentLength() {
        const length = this.request.headers["content-length"];
        if (length) {
            return parseInt(length);
        }
        return 0;
    }
    getContentType() {
        return this.request.headers["content-type"] || "";
    }
    // client info
    getRemoteHost() {
        return this.request.headers["host"] || "";
    }
    getRemoteIP() {
        // TODO
        return "";
    }
    getRemotePort() {
        // TODO
        return "";
    }
    getProtocol() {
        // TODO
        return "";
    }
    getHttpVersion() {
        return this.request.httpVersion;
    }
    // request config
    getInputStream() {
        return this.request.socket;
    }
    getParameter() {
        // TOOD
        return "";
    }
    getParameterMap() {
        // TODO
        return new Map();
    }
    getParameterNames() {
        return [];
    }
    // parser
    getCookie(name) {
        // TOOD
        const todo = "";
        return todo;
    }
    getCookies() {
        return this.getCookieNames().map((name) => {
            return this.getCookie(name);
        });
    }
    getCookieNames() {
        // TOOD
        return this.request.headers["set-cookie"];
    }
    getSession() {
        return;
    }
}
exports.HttpRequest = HttpRequest;
//# sourceMappingURL=HttpRequest.js.map