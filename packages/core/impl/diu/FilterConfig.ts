/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description FilterConfig
 */

import { FilterConfig as IFilterConfig } from "../../__inter__/diu/FilterConfig"
import { DiuFilterConfig } from "../../__inter__/DiuConfig"

export class FilterConfig implements IFilterConfig {

  private config: DiuFilterConfig
  private names: string[]

  public constructor(config: DiuFilterConfig) {
    this.config = config
    this.names = []
    for (const name in config.parameter) {
      this.names.push(name)
    }
  }

  public getInitParameter(name: string): any {
    return this.config.parameter[name]
  }

  public getInitParameterNames(): string[] {
    return this.names
  }
}
