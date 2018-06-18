/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/06/18
 * @description
 */

export interface FilterConfig {
  // Filter class file absolute path
  path: string

  // The name that exported in modules.
  // default value: default
  name?: string

  // You can set some value for initialize
  // such as `{key: 'value'}`
  parameter: { [key: string]: any }
}
