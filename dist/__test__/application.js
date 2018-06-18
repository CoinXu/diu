"use strict";
/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description application
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = require("../packages/core/impl/diu/Application");
const Config_1 = require("./Config");
const app = new Application_1.Application(Config_1.Config);
app.start();
//# sourceMappingURL=application.js.map