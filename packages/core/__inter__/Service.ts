
/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/04/21
 * @description Service
 */

import { HttpRequest } from "./HttpRequest"
import { HttpResponse } from "./HttpResponse"
import { ServiceConfig } from "./ServiceConfig"

export interface Service {
  init(config: ServiceConfig): Promise<Service>
  service(req: HttpRequest, resp: HttpResponse): Promise<Service>
}
