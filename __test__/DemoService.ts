/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/06/18
 * @description DemoService
 */

import { Service } from "../packages/core/impl/diu/Service";
import { Context } from "../packages/core/__inter__/diu/Context";
import { SingletonClassInstance } from "../packages/core/__inter__/verbose/SingletonClassInstance";
import { singletonClassInstanceFactory } from "../packages/core/impl/verbose/SingletonClassInstanceFactory";

export class DemoService extends Service {
  async service(context: Context): Promise<void> {
    context.response.getOutputStream().end("\nDemo service output some content");
  }
}

export default singletonClassInstanceFactory<Service>(DemoService);
