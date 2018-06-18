/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/06/18
 * @description
 */

export interface ServiceConfig {
  // The path of class file.
  path: string
  name?: string
  // Compare with current request path.
  // Invoke `service` method when matched.
  // Route maybe string or regexp string with params.
  // Example:
  // 1. `/path/to/some/action` => `/path/to/some/action`
  // 2. `/path/:some/:/action` will match:
  //    `/path/a/b`
  //    `/path/b/c`
  route: string
};
