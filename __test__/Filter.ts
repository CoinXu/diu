/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description Filter
 */

import { Filter as IFilter } from "../packages/core/__inter__/diu/Filter"
import { FilterConfig } from "../packages/core/__inter__/diu/FilterConfig"
import { HttpRequest } from "../packages/core/__inter__/http/HttpRequest"
import { HttpResponse } from "../packages/core/__inter__/http/HttpResponse"

export class Filter implements IFilter {
  public async init(config: FilterConfig): Promise<Filter> {
    return this
  }

  public async action(req: HttpRequest, resp: HttpResponse): Promise<Filter> {
    return this
  }

  public getName(): string {
    return Filter.name
  }
}
