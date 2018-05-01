/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description Application
 */

import { Filter } from "./Filter"

export interface Application {
  new(): Application
  add(filter: Filter): Application
  listen(port: number, host?: string): Application
}
