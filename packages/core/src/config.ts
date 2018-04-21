/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/04/21
 * @description default config
 */

import { ServerConfig } from "../__inter__/ServerConfig"

const DefaultServerConfig: ServerConfig = {
  env: "devlopment",
  server: {
    port: 80,
    host: "0.0.0.0"
  }
}

export default DefaultServerConfig
