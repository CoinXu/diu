/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/04/21
 * @description Cookie
 * https://tools.ietf.org/html/rfc6265
 */

export interface Cookie {
  new(name: string, value: string): Cookie
  getComment(): string
  getDomain(): string
  getMaxAge(): number
  getName(): string
  getPah(): string
  getSecure(): string
  getValue(): string
  getVersion(): number

  isHttpOnly(): string

  setComment(purpose: string): Cookie
  setDomain(patter: string): Cookie
  setHttpOnly(httpOnly: boolean): Cookie
  setMaxAge(expire: number): Cookie
  setPath(uri: string): Cookie
  setSecure(flag: boolean): Cookie
  setValue(value: string): Cookie
  setVersion(version: number): Cookie

  toString(): string
  serilaize(): string
}
