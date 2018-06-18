/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/06/18
 * @description
 */

import { Context } from "../Context";

export interface Service {
  getName(): string
  service(context: Context): Promise<void>
}
