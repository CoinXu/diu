/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/06/18
 * @description Basic Service
 */

import { Context } from "../../__inter__/diu/Context";
import { ServiceConfig } from "../../__inter__/diu/service/ServiceConfig";
import { Service as IService } from "../../__inter__/diu/service/Service";
import { ClassLoader } from "../verbose/ClassLoader";

export class Service implements IService {

  static load(config: ServiceConfig): IService {
    const loaded = ClassLoader.loadSingleton<IService>(config.path, config.name);
    const service: IService = loaded.getInstance();
    return service;
  }

  /**
   * p1是否能匹配p2，如果匹配，返回true，反之为false。
   * @param {string} p1
   * @param {string} p2
   * @return {boolean}
   *
   * @example
   * match("/a/b", "/a/b") => true
   * TODO
   * match("/a/b", "/a/:b") => true
   */
  static match(p1: string, p2: string): boolean {
    // 目前只匹配相等，不理会query
    const i = p1.indexOf("?");
    if (i > 0) {
      p1 = p1.slice(0, i);
    }
    return p1 === p2;
  }

  public getName(): string {
    return this.constructor.name;
  }

  public async service(context: Context): Promise<void> {
    // TODO throw a server error such as 500
    context.response.getOutputStream().end(`${this.getName()} not implement`);
  }
};
