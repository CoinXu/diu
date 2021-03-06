/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description ClassLoader
 */

import { ClassInstance } from "../../__inter__/verbose/ClassInstance"
import { SingletonClassInstance } from "../../__inter__/verbose/SingletonClassInstance"

export class ClassLoader {
  /**
   * 加载类
   * @param {string} path
   * @param {string} name
   * @return {ClassInstance<T>}
   */
  static load<T>(path: string, name = "default"): ClassInstance<T> {
    const module: any = require(path)
    const ins: ClassInstance<T> = module[name]

    if (typeof ins.newInstance !== "function") {
      throw new TypeError(`${name}.newInstance is not a function`)
    }

    return ins
  }

  /**
   * 加载单例类
   * @param {string} path
   * @param {string} name
   * @return {SingletonClassInstance<T>}
   */
  static loadSingleton<T>(path: string, name = "default"): SingletonClassInstance<T> {
    const module: any = require(path)
    const ins: SingletonClassInstance<T> = module[name]

    if (typeof ins.getInstance !== "function") {
      throw new TypeError(`${name}.getInstance is not a function`)
    }

    return ins
  }
}
