/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/04/21
 * @description Filter
 */

import { ServiceConfig } from "./ServiceConfig"
import { HttpRequest } from "./HttpRequest"
import { HttpResponse } from "./HttpResponse"

export interface Filter {
  init(config: ServiceConfig): Promise<Filter>
  filter(req: HttpRequest, res: HttpResponse): Promise<Filter>
}
