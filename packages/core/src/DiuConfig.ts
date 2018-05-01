/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/04/21
 * @description default config
 */

import { DiuConfig } from "../__inter__/DiuConfig"

const DefaultDiuConfig: DiuConfig = {
  env: "development",
  server: {
    port: 8080,
    host: "0.0.0.0"
  }
}

export default DefaultDiuConfig
