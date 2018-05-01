/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description ClassLoader
 */

import { ClassInstance } from "./ClassInstance"
import { SingletonClassInstance } from "./SingletonClassInstance"

export interface ClassLoader {
  load<T>(path: string, name?: string): ClassInstance<T>
  loadSingleton<T>(path: string, name?: string): SingletonClassInstance<T>
}
