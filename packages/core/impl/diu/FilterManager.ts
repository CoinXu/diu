/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description FilterManager
 */

import { FilterManager as IFilterManager } from "../../__inter__/diu/FilterManage"
import { Filter } from "../../__inter__/diu/Filter"
import { Context } from "../../__inter__/diu/Context"

export class FilterManager implements IFilterManager {
  private filters: Filter[]
  private point: number
  private context: Context

  public constructor(context: Context, filters?: Filter[]) {
    this.context = context
    this.filters = filters || []
    this.point = 0
  }

  public add(filter: Filter): FilterManager {
    this.filters.push(filter)
    return this
  }

  public async next(): Promise<FilterManager> {
    if (!this.hasNext()) {
      return this
    }

    await this.filters[this.point].action(this.context.request, this.context.response)
    this.point = this.point + 1

    return this
  }

  public hasNext(): boolean {
    return this.point < this.filters.length
  }
}
