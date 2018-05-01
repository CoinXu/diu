/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description Application
 */

import { Application as IApplication } from "../../__inter__/diu/Application"
import { FilterManager } from "./FilterManager"
import { Filter } from "../../__inter__/diu/Filter"
import { Context } from "../../__inter__/diu/Context"
import { DiuConfig } from "../../__inter__/DiuConfig"
import { createServer, Server, IncomingMessage, ServerResponse } from "http"
import { createContext } from "./Context"
import { HttpStatus } from "../http/HttpStatus"

export class Application implements IApplication {

  private config: DiuConfig
  private filters: Filter[]
  private server: Server

  public constructor(config: DiuConfig, server?: Server) {
    this.config = config
    this.filters = []
    this.server = server || createServer()
  }

  public add(filter: Filter): Application {
    this.filters.push(filter)
    return this
  }

  public listen(port: number, host = "0.0.0.0"): Application {
    this.server.listen(port, host, (req: IncomingMessage, res: ServerResponse): void => {
      const context: Context = createContext(req, res)
      const manager: FilterManager = new FilterManager(context, this.filters)
      manager.next().catch(error => {
        context.response.setStatus(HttpStatus.INTERNAL_SERVERERROR.code)
        context.response.getOutputStream().write(error.message)
      })
    })
    return this
  }
}
