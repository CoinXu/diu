/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description DemoFilter
 */

import { Filter as IFilter } from "../packages/core/__inter__/diu/Filter"
import { FilterConfig } from "../packages/core/__inter__/diu/FilterConfig"
import { HttpRequest } from "../packages/core/__inter__/http/HttpRequest"
import { HttpResponse } from "../packages/core/__inter__/http/HttpResponse"
import { singletonClassInstanceFactory } from "../packages/core/impl/verbose/SingletonClassInstanceFactory"
import { SingletonClassInstance } from "../packages/core/__inter__/verbose/SingletonClassInstance"

export class DemoFilter implements IFilter {

  public async init(config: FilterConfig): Promise<boolean> {
    return true
  }

  public async action(req: HttpRequest, resp: HttpResponse): Promise<DemoFilter> {
    resp.getServerResponse().end("ok")
    return this
  }

  public getName(): string {
    return "TestFilter"
  }
}

export default <SingletonClassInstance<IFilter>>singletonClassInstanceFactory(DemoFilter)
