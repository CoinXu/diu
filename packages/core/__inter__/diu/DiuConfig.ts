/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/04/21
 * @description
 */

import { FilterConfig } from "./filter/FilterConfig";
import { ServiceConfig } from "./service/ServiceConfig";

export interface DiuConfig {
  env: "production" | "development"
  server: {
    port: number
    host: string
  },
  application: {
    filter: FilterConfig[],
    services: ServiceConfig[]
  }
}
