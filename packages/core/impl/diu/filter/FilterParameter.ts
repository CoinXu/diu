/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description IFilterParameter
 */

import { FilterParameter as IFilterParameter } from "../../../__inter__/diu/filter/FilterParameter";
import { FilterConfig } from "../../../__inter__/diu/filter/FilterConfig";

export class FilterParameter implements IFilterParameter {

  private config: FilterConfig;
  private names: string[];

  public constructor(config: FilterConfig) {
    this.config = config;
    this.names = [];
    for (const name in config.parameter) {
      this.names.push(name);
    }
  }

  public getInitParameter(name: string): any {
    return this.config.parameter[name];
  }

  public getInitParameterNames(): string[] {
    return this.names;
  }
}
