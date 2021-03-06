"use strict";
/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description HttpStatus
 */
Object.defineProperty(exports, "__esModule", { value: true });
function struct(code, body) {
    return { code, body };
}
exports.HttpStatus = {
    OK: struct(200, 'ok'),
    NO_CONTENT: struct(204, 'No Content'),
    // ## Redirection 3xx
    SEE_OTHER: struct(303, 'See Other'),
    NOT_MODIFIED: struct(304, 'Not Modified'),
    UNUSED: struct(306, 'Unused'),
    // ## Client Error 4xx
    BAD_REQUEST: struct(400, 'Bad Request'),
    UNAUTHORIZED: struct(401, 'Unauthorized'),
    FORBIDDEN: struct(403, 'Forbidden'),
    NOT_FOUNT: struct(404, 'Not Fount'),
    METHOD_NOT_ALLOWED: struct(405, 'Method Not Allowed'),
    NOT_ACCEPTABLE: struct(406, 'Not Acceptable'),
    REQUEST_TIMEOUT: struct(408, 'Request Timeout'),
    CONFLICT: struct(409, 'Conflict'),
    // The requested resource is no longer available at the server
    // and no forwarding address is known.
    GONE: struct(410, 'Gone'),
    LENGTH_REQUIRED: struct(411, 'Length Required'),
    REQUEST_ENTITY_TOO_LARGE: struct(413, 'Request Entity TooLarge'),
    REQUEST_URI_TOO_LONG: struct(414, 'Request-URI Too Long'),
    UNSUPPORTED_MEDIA_TYPE: struct(415, 'Unsupported Media Type'),
    EXPECTATION_FAILED: struct(417, 'Expectation Failed'),
    // ## Server Error 5xx
    INTERNAL_SERVERERROR: struct(500, 'Internal ServerError'),
    NOT_IMPLEMENTED: struct(501, 'Not Implemented'),
    BAD_GATEWAY: struct(502, 'Bad Gateway'),
    SERVICE_UNAVAILABLE: struct(503, 'Service Unavailable'),
    GATEWAY_TIMEOUT: struct(504, 'Gateway Timeout'),
    HTTP_VERSION_NOT_SUPPORTED: struct(505, 'HTTP Version Not Supported')
};
//# sourceMappingURL=HttpStatus.js.map