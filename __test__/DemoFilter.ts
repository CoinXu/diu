/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description DemoFilter
 */

import { Filter as IFilter } from "../packages/core/__inter__/diu/filter/Filter";
import { FilterParameter } from "../packages/core/__inter__/diu/filter/FilterParameter";
import { Context } from "../packages/core/__inter__/diu/Context";
import { ChannelManager } from "../packages/core/__inter__/diu/ChannelManager";

import { SingletonClassInstance } from "../packages/core/__inter__/verbose/SingletonClassInstance";
import { singletonClassInstanceFactory } from "../packages/core/impl/verbose/SingletonClassInstanceFactory";

export class DemoFilter implements IFilter {

  public async init(parameter: FilterParameter): Promise<boolean> {
    const names: string[] = parameter.getInitParameterNames();
    const name: string = this.getName();

    for (const n of names) {
      console.log(`Filter [${names}] parameter.${name} value is: ${parameter.getInitParameter(n)}`);
    }

    return true;
  }

  public async action(context: Context, manager: ChannelManager<IFilter>): Promise<DemoFilter> {
    context.response.getServerResponse().end("ok");
    await manager.next();
    return this;
  }

  public getName(): string {
    return "TestFilter";
  }
}

export default <SingletonClassInstance<IFilter>>singletonClassInstanceFactory(DemoFilter);
