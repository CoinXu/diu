/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description Application
 */

import { Filter } from "./Filter"

export interface Application {
  add(filter: Filter): Application
  start(callback: () => void): Application
  listen(port: number, host?: string): Application
}
