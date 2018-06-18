/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description Application
 */

import { Application as IApplication } from "../../__inter__/diu/Application";
import { FilterManager } from "./filter/FilterManager";
import { Filter } from "../../__inter__/diu/filter/Filter"
import { Service as IService } from "../../__inter__/diu/service/Service";
import { Context } from "../../__inter__/diu/Context";
import { DiuConfig } from "../../__inter__/diu/DiuConfig";
import { createServer, Server, IncomingMessage, ServerResponse } from "http";
import { createContext } from "./Context";
import { Service } from "./Service";
import { HttpStatus } from "../http/HttpStatus";
import { FilterHelper } from "./filter/FilterHelper";


export class Application implements IApplication {

  private config: DiuConfig;
  private filters: Filter[];
  private services: {route: string, service: IService}[];
  private server: Server;

  public constructor(config: DiuConfig, server?: Server) {
    this.config = config;
    this.filters = [];
    this.services = [];

    this.server = server || createServer();
  }

  private async load(): Promise<Application> {
    // 1. load filters
    for (const config of this.config.application.filter) {
      const filter: Filter = await FilterHelper.load(config);
      this.filters.push(filter);
    }

    // 2. load services
    for (const serviceConfig of this.config.application.services) {
      this.services.push({
        route: serviceConfig.route,
        service: Service.load(serviceConfig)
      });
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
    this.server.on("request", async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
      const context: Context = createContext(req, res);
      const manager: FilterManager = new FilterManager(context, this.filters);

      // 1. invoke filter
      manager.next().catch(function (error: Error) {
        context.response.setStatus(HttpStatus.INTERNAL_SERVERERROR.code);
        context.response.getOutputStream().write(error.message);
      });

      // 2. invoke services
      for (const cache of this.services) {
        console.log(`request url: ${req.url}`);
        if (typeof req.url === "string" && Service.match(req.url, cache.route)) {
          await cache.service.service(context);
        }
      }
    });

    this.server.listen(port, host);
    return this
  }
}
