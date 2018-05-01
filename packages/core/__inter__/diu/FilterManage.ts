/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description FilterManage
 */

import { Filter } from "./Filter"
import { DiuContext } from "./DiuContext"

export interface FilterManage {
  new(context: DiuContext, filters?: Filter[]): FilterManage
  add(filter: Filter): FilterManage
  next(): Promise<FilterManage>
  hasNext() :boolean
}
