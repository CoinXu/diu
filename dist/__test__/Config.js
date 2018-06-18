"use strict";
/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description Config
 */
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
exports.Config = {
    env: "development",
    server: {
        port: 3001,
        host: "0.0.0.0"
    },
    application: {
        filter: [
            {
                path: path_1.join(__dirname, "/DemoFilter"),
                name: "default",
                parameter: {}
            }
        ]
    }
};
//# sourceMappingURL=Config.js.map