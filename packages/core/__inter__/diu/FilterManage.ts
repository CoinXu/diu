/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description FilterManage
 */

import { Filter } from "./Filter"

export interface FilterManager {
  add(filter: Filter): FilterManager
  next(): Promise<FilterManager>
  hasNext(): boolean
}
