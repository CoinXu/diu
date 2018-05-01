/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/04/21
 * @description HttpResponse
 */

import { Cookie } from "./Cookie"
import { Header } from "./Header"

export interface HttpResponse {
  getBufferSize(): string
  getCharacterEncoding(): string
  getContentType(): string
  getOutputStream(): NodeJS.WritableStream

  reset(): HttpResponse
  resetBuffer(): HttpResponse
  setBufferSize(size: number): HttpResponse
  setCharacterEncoding(charset: string): HttpResponse
  setContentType(type: string): HttpResponse
  setContentLength(length: number): HttpResponse

  // header
  getHeader(name: string): Header
  getHeaders(): Header[]
  getHeaderNames(): string[]
  containsHeader(name: string): boolean
  addHeader(name: string, value: Header): HttpResponse
  setHeader(name: string, value: Header): HttpResponse
  addCookie(cookie: Cookie): HttpResponse
  redirect(localtion: string): HttpResponse
  getStatus(): number
  setStatus(status: number): HttpResponse
}
