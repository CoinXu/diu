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
import { SingletonClassInstance } from "../../__inter__/verbose/SingletonClassInstance"
import { createServer, Server, IncomingMessage, ServerResponse } from "http"
import { createContext } from "./Context"
import { HttpStatus } from "../http/HttpStatus"
import { FilterConfig } from "./FilterConfig"
import { ClassLoader } from "../verbose/ClassLoader"

export class Application implements IApplication {

  private config: DiuConfig
  private filters: Filter[]
  private server: Server

  public constructor(config: DiuConfig, server?: Server) {
    this.config = config
    this.filters = []
    this.server = server || createServer()
  }

  private async load(): Promise<Application> {
    // load filters
    for (const config of this.config.application.filter) {
      const ins: SingletonClassInstance<Filter> = ClassLoader.loadSingleton<Filter>(config.path, config.name)
      const filter: Filter = ins.getInstance()
      const success: boolean = await filter.init(new FilterConfig(config))
      if (!success) {
        throw new Error(`install Filter [${filter.getName()}] fault`)
      }
      this.filters.push(filter)
    }

    return this
  }

  private async _start(): Promise<Application> {
    await this.load()
    this.listen(this.config.server.port, this.config.server.host)
    return this
  }

  public start(callback?: () => void): Application {
    this._start().then(callback).catch(callback)
    return this
  }

  public add(filter: Filter): Application {
    this.filters.push(filter)
    return this
  }

  public listen(port: number, host: string): Application {
    this.server.on("request", (req: IncomingMessage, res: ServerResponse): void => {
      const context: Context = createContext(req, res)
      const manager: FilterManager = new FilterManager(context, this.filters)
      manager.next().catch(error => {
        context.response.setStatus(HttpStatus.INTERNAL_SERVERERROR.code)
        context.response.getOutputStream().write(error.message)
      })
    })
    this.server.listen(port, host)
    return this
  }
}
