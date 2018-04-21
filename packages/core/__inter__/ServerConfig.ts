/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/04/21
 * @description
 */

export interface ServerConfig {
  env: "production" | "devlopment"
  server: {
    port: number
    host: string
  }
}
