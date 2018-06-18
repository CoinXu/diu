/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description FilterManager
 */

import { ChannelManager as IChannelMannager } from "../../../__inter__/diu/ChannelManager";
import { Filter } from "../../../__inter__/diu/filter/Filter";
import { Context } from "../../../__inter__/diu/Context";

export class FilterManager implements IChannelMannager<Filter> {
  private filters: Filter[];
  private point: number;
  private context: Context;

  public constructor(context: Context, filters?: Filter[]) {
    this.context = context;
    this.filters = filters || [];
    this.point = 0;
  }

  public add(filter: Filter): FilterManager {
    this.filters.push(filter);
    return this;
  }

  public remove(filter: Filter): FilterManager {
    this.filters = this.filters.filter(f => f !== filter);
    return this;
  }

  public async next(): Promise<FilterManager> {
    if (!this.hasNext()) {
      return this;
    }

    const point = this.point++;
    const filter: Filter = this.filters[point];

    if(filter) {
      await filter.action(this.context, this);
    }

    return this;
  }

  public hasNext(): boolean {
    return this.point < this.filters.length;
  }
}
