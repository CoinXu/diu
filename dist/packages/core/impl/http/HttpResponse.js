"use strict";
/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description HttpResponse
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Header_1 = require("./Header");
class HttpResponse {
    constructor(response) {
        this.response = response;
        this.charset = "utf-8";
        this.bufferSize = 0;
        this.contentType = "";
        this.contentLength = 0;
        this.headers = [];
        this.status = 200;
    }
    getServerResponse() {
        return this.response;
    }
    getBufferSize() {
        return 0;
    }
    getCharacterEncoding() {
        return this.charset;
    }
    getContentType() {
        return this.contentType;
    }
    getOutputStream() {
        return this.response;
    }
    reset() {
        return this;
    }
    resetBuffer() {
        return this;
    }
    setBufferSize(size) {
        this.bufferSize = size;
        return this;
    }
    setCharacterEncoding(charset) {
        this.charset = charset;
        return this;
    }
    setContentType(type) {
        this.contentType = type;
        return this;
    }
    setContentLength(length) {
        this.contentLength = length;
        return this;
    }
    getHeader(name) {
        return this.headers.find(function (header) {
            return header.getName() === name;
        }) || null;
    }
    getHeaders() {
        return this.headers;
    }
    getHeaderNames() {
        return this.headers.map(function (header) {
            return header.getName();
        });
    }
    containsHeader(name) {
        return this.getHeader(name) !== null;
    }
    addHeader(header) {
        this.headers.push(header);
        return this;
    }
    setHeader(header) {
        if (this.containsHeader(header.getValue())) {
            return this;
        }
        this.addHeader(header);
        return this;
    }
    addCookie(cookie) {
        this.addHeader(new Header_1.Header("set-cookie", cookie.toString()));
        return this;
    }
    redirect(location) {
        this.addHeader(new Header_1.Header("location", location));
        this.status = 302;
        return this;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
        return this;
    }
}
exports.HttpResponse = HttpResponse;
//# sourceMappingURL=HttpResponse.js.map