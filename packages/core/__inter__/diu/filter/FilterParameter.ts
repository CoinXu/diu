/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/04/21
 * @description
 */

export interface FilterParameter {
  getInitParameter(name: string): any
  getInitParameterNames(): string[]
}
