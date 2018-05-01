/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date 2018/05/01
 * @description HttpRequest
 */

import { HttpRequest as IHttpRequest } from "../../__inter__/http/HttpRequest"
import { Cookie } from "../../__inter__/http/Cookie"
import { IncomingMessage } from "http"

export class HttpRequest implements IHttpRequest {
  private request: IncomingMessage
  private names: string[]

  public constructor(request: IncomingMessage) {
    this.request = request
    this.names = []

    for (const propKey in request.headers) {
      this.names.push(propKey)
    }
  }

  public getAttribute(name: string): string {
    const value = this.request.headers[name] || ""
    return Array.isArray(value) ? value.toString() : value
  }

  public getAttributeNames(): string[] {
    return this.names
  }

  // content
  getContentLength(): number {
    const length: string = <string>this.request.headers["content-length"]
    if (length) {
      return parseInt(length)
    }
    return 0
  }

  getContentType(): string {
    return this.request.headers["content-type"] || ""
  }

  // client info
  getRemoteHost(): string {
    return this.request.headers["host"] || ""
  }

  getRemoteIP(): string {
    // TODO
    return ""
  }

  getRemotePort(): string {
    // TODO
    return ""
  }

  getProtocol(): string {
    // TODO
    return ""
  }

  getHttpVersion(): string {
    return this.request.httpVersion
  }

  // request config
  getInputStream(): NodeJS.ReadableStream | null {
    return <NodeJS.ReadableStream>this.request.socket
  }

  getParameter(): string {
    // TOOD
    return ""
  }

  getParameterMap(): Map<string, string> {
    // TODO
    return new Map<string, string>()
  }

  getParameterNames(): string[] {
    return []
  }

  // parser
  getCookie(name: string): Cookie {
    // TOOD
    const todo: any = ""
    return <Cookie>todo
  }

  getCookies(): Cookie[] {
    return this.getCookieNames().map((name: string) => {
      return this.getCookie(name)
    })
  }

  getCookieNames(): string[] {
    // TOOD
    return <string[]>this.request.headers["set-cookie"]
  }

  getSession(): void {
    return
  }
}
