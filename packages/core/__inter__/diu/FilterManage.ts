/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description FilterManage
 */

import { Filter } from "./Filter"
import { Context } from "./Context"

export interface FilterManager {
  new(context: Context, filters?: Filter[]): FilterManager
  add(filter: Filter): FilterManager
  next(): Promise<FilterManager>
  hasNext() :boolean
}
