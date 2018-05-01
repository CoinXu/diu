/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/04/21
 * @description HttpRequest
 */

import { Cookie } from "./Cookie"

export interface HttpRequest {
  getAttribute(name: string): string
  getAttributeNames(): string[]

  // content
  getContentLength(): number
  getContentType(): string

  // client info
  getRemoteHost(): string
  getRemotePort(): string
  getRemoteIP(): string
  getProtocol(): string
  getHttpVersion(): string

  // request config
  getInputStream(): NodeJS.ReadableStream | null
  getParameter(): string
  getParameterMap(): Map<string, string>
  getParameterNames(): string[]

  // parser
  getCookie(name: string): Cookie | null
  getCookies(): Cookie[]
  getCookieNames(): string[]

  getSession(): void
}
