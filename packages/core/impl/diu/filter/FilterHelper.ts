/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/06/18
 * @description Filter Helper
 */

import { FilterConfig } from "../../../__inter__/diu/filter/FilterConfig";
import { Filter } from "../../../__inter__/diu/filter/Filter";
import { SingletonClassInstance } from "../../../__inter__/verbose/SingletonClassInstance";
import { ClassLoader } from "../../verbose/ClassLoader";
import { FilterParameter } from "./FilterParameter";

export class FilterHelper {
  static async load(config: FilterConfig): Promise<Filter> {
    const loaded = ClassLoader.loadSingleton<Filter>(config.path, config.name);
    const filter: Filter = loaded.getInstance();
    const success: boolean = await filter.init(new FilterParameter(config));

    if(!success) {
      throw new Error(`Filter ${filter.getName()} install fault`);
    }

    return filter;
  }
};
