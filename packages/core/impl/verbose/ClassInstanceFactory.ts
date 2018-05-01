/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description ClassInstanceFactory
 */

import { ClassInstance } from "../../__inter__/verbose/ClassInstance"
import { ClassConstructor } from "../../__inter__/verbose/ClassConstructor"

export function classInstanceFactory<T>(Constructor: ClassConstructor<T>): ClassInstance<T> {
  return {
    newInstance(): T {
      return new Constructor()
    }
  }
}
