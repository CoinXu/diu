/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/04/21
 * @description Service
 */

import { FilterParameter } from "./FilterParameter";
import { ChannelManager } from "../ChannelManager";
import { Context } from "../Context";

export interface Filter {
  init(parameter: FilterParameter): Promise<boolean>
  action(contenxt: Context, manager: ChannelManager<Filter>): Promise<Filter>
  getName(): string
}
