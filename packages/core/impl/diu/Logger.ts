/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/06/18
 * @description
 */

import { Logger as ILogger } from "../../__inter__/diu/Logger";

export class Logger implements ILogger {

  log(...args: any[]): void {
    console.log.apply(console, args);
  }

  info(...args: any[]): void {
    console.info.apply(console, args);
  }

  warn(...args: any[]): void {
    console.warn.apply(console, args);
  }

  error(...args: any[]): void {
    console.error.apply(console, args);
  }
};
