/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description Application
 */

import { Filter } from "./filter/Filter"
import { DiuConfig } from "./DiuConfig";

export interface Application {
  start(callback: () => void): Application
  listen(port: number, host?: string): Application
}
