/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description Header
 */

import { Header as IHeader } from "../../__inter__/http/Header"

export class Header implements IHeader {
  private name: string
  private value: string

  public constructor(name: string, value: string) {
    this.name = name
    this.value = value
  }

  public getName(): string {
    return this.name
  }

  public getValue(): string {
    return this.value
  }
}
