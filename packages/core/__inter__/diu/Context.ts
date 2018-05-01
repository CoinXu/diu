/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description DiuContext
 */

import { HttpRequest } from "../http/HttpRequest"
import { HttpResponse } from "../http/HttpResponse"

export interface Context {
  request: HttpRequest
  response: HttpResponse
}
