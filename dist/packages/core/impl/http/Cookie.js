"use strict";
/**
 * @author cai
 * @date 2018/05/01
 * @description Cookie
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Cookie {
    constructor(name, value) {
        this.comment = "";
        this.domain = "";
        this.maxAge = -1;
        this.name = "";
        this.path = "";
        this.secure = false;
        this.value = "";
        this.version = 1.0;
        this.httpOnly = false;
        this.name = name;
        this.value = value;
    }
    getComment() {
        return this.comment;
    }
    getDomain() {
        return this.domain;
    }
    getMaxAge() {
        return this.maxAge;
    }
    isHttpOnly() {
        return this.httpOnly;
    }
    getName() {
        return this.name;
    }
    getPath() {
        return this.path;
    }
    getSecure() {
        return this.secure;
    }
    getValue() {
        return this.value;
    }
    getVersion() {
        return this.version;
    }
    setComment(purpose) {
        this.comment = purpose;
        return this;
    }
    setDomain(patter) {
        this.domain = patter;
        return this;
    }
    setMaxAge(expire) {
        this.maxAge = expire;
        return this;
    }
    setHttpOnly(httpOnly) {
        this.httpOnly = httpOnly;
        return this;
    }
    setPath(uri) {
        this.path = uri;
        return this;
    }
    setSecure(flag) {
        this.secure = flag;
        return this;
    }
    setValue(value) {
        this.value = value;
        return this;
    }
    setVersion(version) {
        this.version = version;
        return this;
    }
    toString() {
        const cookie = [];
        cookie.push(this.name + ':' + this.value);
        cookie.push('Domain=' + this.domain);
        cookie.push('Max-Age=' + this.maxAge);
        cookie.push('Path=' + this.path);
        if (this.secure) {
            cookie.push('Secure');
        }
        if (this.httpOnly) {
            cookie.push('HttpOnly');
        }
        return cookie.join(';');
    }
}
exports.Cookie = Cookie;
//# sourceMappingURL=Cookie.js.map