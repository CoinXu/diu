/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description HttpResponse
 */

import { HttpResponse as IHttpResponse } from "../../__inter__/http/HttpResponse"
import { ServerResponse } from "http"
import { Header } from "./Header"
import { Cookie } from "./Cookie"

export class HttpResponse implements IHttpResponse {
  private response: ServerResponse
  private charset: string
  private bufferSize: number
  private contentType: string
  private contentLength: number
  private headers: Header[]
  private status: number

  public constructor(response: ServerResponse) {
    this.response = response
    this.charset = "utf-8"
    this.bufferSize = 0
    this.contentType = ""
    this.contentLength = 0
    this.headers = []
    this.status = 200
  }

  public getBufferSize(): number {
    return 0
  }

  public getCharacterEncoding(): string {
    return this.charset
  }

  public getOutputStream(): NodeJS.WritableStream {
    return <NodeJS.WritableStream>this.response
  }

  public reset(): HttpResponse {
    return this
  }

  public resetBuffer(): HttpResponse {
    return this
  }

  public setBufferSize(size: number): HttpResponse {
    this.bufferSize = size
    return this
  }

  public setCharacterEncoding(charset: string): HttpResponse {
    this.charset = charset
    return this
  }

  public setContentType(type: string): HttpResponse {
    this.contentType = type
    return this
  }

  public setContentLength(length: number): HttpResponse {
    this.contentLength = length
    return this
  }

  public getHeader(name: string): Header | null {
    return this.headers.find(function (header: Header): boolean {
      return header.getName() === name
    }) || null
  }

  public getHeaders(): Header[] {
    return this.headers
  }

  public getHeaderNames(): string[] {
    return this.headers.map(function (header: Header): string {
      return header.getName()
    })
  }

  public containsHeader(name: string): string[] {
    return this.getHeader(name) !== null
  }

  public addHeader(header: Header): HttpResponse {
    this.headers.push(header)
    return this
  }

  public setHeader(name: string, value: Header): HttpResponse {
    if (this.containsHeader(name)) {
      return this
    }
    this.addHeader(value)
    return this
  }

  public addCookie(cooke: Cookie): HttpResponse {
    this.addHeader(new Header("set-cookie", cooke.toString()))
    return this
  }

  public redirect(location: string): HttpResponse {
    this.addHeader(new Header("location", location))
    this.status = 302
    return this
  }

  public getStatus(): number {
    return this.status
  }

  public setStatus(status: number): HttpResponse {
    this.status = status
    return this
  }
}
