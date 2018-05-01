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
import { createContext } from "./Context"

export class Application implements IApplication {

  private server: Server
  private filters: Filter[]

  public constructor(server?: Server) {
    this.server = server || createServer()
    this.filters = []
  }

  private lisenter(): (req: IncomingMessage, res: ServerResponse) => void {
    return (req: IncomingMessage, res: ServerResponse): void => {
      const context: Context = createContext(req, res)
      const manager: FilterManager = new FilterManager(context, this.filters)
      manager.apply().catch(error => {
        context.response.setStatus(500)
        context.response.getOutputStream().write(error.message)
      })
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
