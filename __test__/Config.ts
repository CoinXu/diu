/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description Config
 */

import { DiuConfig } from "../packages/core/__inter__/DiuConfig"
import { join } from "path"

export const Config: DiuConfig = {
  env: "development",
  server: {
    port: 8080,
    host: "0.0.0.0"
  },
  application: {
    filter: [
      {
        path: join(__dirname, "/DemoFilter"),
        name: "default",
        parameter: {}
      }
    ]
  }
}

