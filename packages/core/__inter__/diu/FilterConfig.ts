/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/04/21
 * @description
 */

export interface FilterConfig {
  getInitParameter(name: string): string
  getInitParameterNames(): string[]
  getFilterName(): string
}
