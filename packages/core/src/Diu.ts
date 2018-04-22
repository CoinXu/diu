/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/04/21
 * @description Diu Application
 */

import { ServerConfig } from "../__inter__/ServerConfig"
import { Filter } from "../__inter__/Filter"

export class Diu {
  private config: ServerConfig
  private filters: Filter[]

  public constructor(config: ServerConfig) {
    this.config = config
    this.filters = []
  }

  public getDiuConfig(): ServerConfig {
    return this.config
  }

  public use(filter: Filter): Diu {
    this.filters.push(filter)
    return this
  }

  public listen(port: number, host: string): Diu {
    return this
  }
}
