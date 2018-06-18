/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/06/18
 * @description Diu Logger
 */

export interface Logger {
  log(...args: any[]): void
  info(...args: any[]): void
  warn(...args: any[]): void
  error(...args: any[]): void
};
