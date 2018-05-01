/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/04/21
 * @description
 */

export interface DiuFilterConfig {
  // absolute path
  path: string
  // default value: default
  name?: string
  parameter: { [key: string]: any }
}

export interface DiuConfig {
  env: "production" | "development"
  server: {
    port: number
    host: string
  },
  application: {
    filter: DiuFilterConfig[]
  }
}
