/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/06/18
 * @description
 */

export interface ChannelManager<T> {
  add(struct: T): ChannelManager<T>
  remove(struct: T): ChannelManager<T>
  next(): Promise<ChannelManager<T>>
  hasNext(): boolean
}
