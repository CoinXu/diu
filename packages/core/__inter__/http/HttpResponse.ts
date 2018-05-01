/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/04/21
 * @description HttpResponse
 */

import { Cookie } from "./Cookie"
import { Header } from "./Header"
import { ServerResponse } from "http"

export interface HttpResponse {
  getServerResponse(): ServerResponse
  getBufferSize(): number
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
  getHeader(name: string): Header | null
  getHeaders(): Header[]
  getHeaderNames(): string[]
  containsHeader(name: string): boolean
  addHeader(header: Header): HttpResponse
  setHeader(header: Header): HttpResponse
  addCookie(cookie: Cookie): HttpResponse
  redirect(location: string): HttpResponse
  getStatus(): number
  setStatus(status: number): HttpResponse
}
