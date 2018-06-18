/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description Application
 */

import { Application as IApplication } from "../../__inter__/diu/Application";
import { FilterManager } from "./filter/FilterManager";
import { Filter } from "../../__inter__/diu/filter/Filter";
import { Context } from "../../__inter__/diu/Context";
import { DiuConfig } from "../../__inter__/diu/DiuConfig";
import { createServer, Server, IncomingMessage, ServerResponse } from "http";
import { createContext } from "./Context";
import { HttpStatus } from "../http/HttpStatus";
import { FilterHelper } from "./filter/FilterHelper";

export class Application implements IApplication {

  private config: DiuConfig;
  private filters: Filter[];
  private server: Server;

  public constructor(config: DiuConfig, server?: Server) {
    this.config = config;
    this.filters = [];
    this.server = server || createServer();
  }

  private async load(): Promise<Application> {
    // 1. load filters
    for (const config of this.config.application.filter) {
      const filter: Filter = await FilterHelper.load(config);
      this.filters.push(filter);
    }

    return this;
  }

  private async bootstrap(): Promise<Application> {
    await this.load();
    this.listen(this.config.server.port, this.config.server.host);
    return this;
  }

  public start(callback?: () => void): Application {
    this.bootstrap().then(callback).catch(callback);
    return this
  }

  public listen(port: number, host: string): Application {
    this.server.on("request", (req: IncomingMessage, res: ServerResponse): void => {
      const context: Context = createContext(req, res);
      const manager: FilterManager = new FilterManager(context, this.filters);

      manager.next().catch(function (error: Error) {
        context.response.setStatus(HttpStatus.INTERNAL_SERVERERROR.code);
        context.response.getOutputStream().write(error.message);
      });
    });

    this.server.listen(port, host);
    return this
  }
}
