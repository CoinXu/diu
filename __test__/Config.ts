/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description Config
 */

import { join } from "path";
import { DiuConfig } from "../packages/core/__inter__/diu/DiuConfig";

export const Config: DiuConfig = {
  env: "development",
  server: {
    port: 3001,
    host: "0.0.0.0"
  },
  application: {
    filter: [
      {
        path: join(__dirname, "/DemoFilter"),
        name: "default",
        parameter: {}
      }
    ],
    services: [
      {
        path: join(__dirname, "./DemoService"),
        name: "default",
        route: "/example/service"
      }
    ]
  }
};

