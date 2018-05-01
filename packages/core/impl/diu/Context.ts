/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description DiuContext
 */

import { Context } from "../../__inter__/diu/Context"
import { IncomingMessage, ServerResponse } from "http"
import { HttpRequest } from "../http/HttpRequest"
import { HttpResponse } from "../http/HttpResponse"

export function createContext(req: IncomingMessage, res: ServerResponse): Context {
  return {
    request: new HttpRequest(req),
    response: new HttpResponse(res)
  }
}
