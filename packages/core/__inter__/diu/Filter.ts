/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/04/21
 * @description Service
 */

import { HttpRequest } from "../http/HttpRequest"
import { HttpResponse } from "../http/HttpResponse"
import { FilterConfig } from "./FilterConfig"

export interface Filter {
  init(config: FilterConfig): Promise<boolean>
  action(req: HttpRequest, resp: HttpResponse): Promise<Filter>
  getName(): string
}
