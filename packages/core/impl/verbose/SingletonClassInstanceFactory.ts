/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description ClassInstanceFactory
 */

import { SingletonClassInstance } from "../../__inter__/verbose/SingletonClassInstance"
import { ClassConstructor } from "../../__inter__/verbose/ClassConstructor"

export function singletonClassInstanceFactory<T>(Constructor: ClassConstructor<T>): SingletonClassInstance<T> {
  let instance: T | null = null
  return {
    getInstance(): T {
      if (instance === null) {
        instance = new Constructor()
      }
      return instance
    }
  }
}
