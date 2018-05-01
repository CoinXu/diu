/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description Application
 */

import { Application as IApplication } from "../../__inter__/diu/Application"
import { FilterManager } from "./FilterManager"
import { Filter } from "../../__inter__/diu/Filter"
import { Context } from "../../__inter__/diu/Context"
import { createServer, Server, IncomingMessage, ServerResponse } from "http"

export class Application implements IApplication {

  private server: Server
  private filters: Filter[]

  public constructor(server?: Server) {
    this.server = server || createServer()
    this.filters = []
  }

  private lisenter(): (req: IncomingMessage, res: ServerResponse) => void {
    const context: Context = {}
    const manager: FilterManager = new FilterManager()
    return function (req: IncomingMessage, res: ServerResponse): void {

    }
  }

  public add(filter: Filter): Application {
    this.filters.push(filter)
    return this
  }

  public listen(port: number, host: string) {
    this.server.listen(port, host)
  }
}
