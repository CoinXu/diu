/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description Filter
 */

import { Filter as IFilter } from "../packages/core/__inter__/diu/Filter"
import { FilterConfig } from "../packages/core/__inter__/diu/FilterConfig"
import { HttpRequest } from "../packages/core/__inter__/http/HttpRequest"
import { HttpResponse } from "../packages/core/__inter__/http/HttpResponse"
import { singletonClassInstanceFactory } from "../packages/core/impl/verbose/SingletonClassInstanceFactory"

export class Filter implements IFilter {
  public async init(config: FilterConfig): Promise<boolean> {
    return true
  }

  public async action(req: HttpRequest, resp: HttpResponse): Promise<Filter> {
    resp.getServerResponse().end("ok")
    return this
  }

  public getName(): string {
    return "TestFilter"
  }
}

export default singletonClassInstanceFactory(Filter)
