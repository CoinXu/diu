/**
 * @author cai
 * @date 2018/05/01
 * @description Cookie
 */

import { Cookie as ICookie } from "../../__inter__/http/Cookie"

export class Cookie implements ICookie {
  private comment: string = ""
  private domain: string = ""
  private maxAge: number = -1
  private name: string = ""
  private path: string = ""
  private secure: boolean = false
  private value: string = ""
  private version: number = 1.0
  private httpOnly: boolean = false

  public constructor(name: string, value: string) {
    this.name = name
    this.value = value
  }

  public getComment(): string {
    return this.comment
  }

  public getDomain(): string {
    return this.domain
  }

  public getMaxAge(): number {
    return this.maxAge
  }

  public isHttpOnly(): boolean {
    return this.httpOnly
  }

  public getName(): string {
    return this.name
  }

  public getPath(): string {
    return this.path
  }

  public getSecure(): boolean {
    return this.secure
  }

  public getValue(): string {
    return this.value
  }

  public getVersion(): number {
    return this.version
  }

  public setComment(purpose: string): Cookie {
    this.comment = purpose
    return this
  }

  public setDomain(patter: string): Cookie {
    this.domain = patter;
    return this
  }

  public setMaxAge(expire: number): Cookie {
    this.maxAge = expire
    return this
  }

  public setHttpOnly(httpOnly: boolean): Cookie {
    this.httpOnly = httpOnly
    return this
  }

  public setPath(uri: string): Cookie {
    this.path = uri
    return this
  }

  public setSecure(flag: boolean): Cookie {
    this.secure = flag
    return this
  }

  public setValue(value: string): Cookie {
    this.value = value
    return this
  }

  public setVersion(version: number): Cookie {
    this.version = version
    return this
  }

  public toString(): string {
    const cookie = [];

    cookie.push(this.name + ':' + this.value)
    cookie.push('Domain=' + this.domain)
    cookie.push('Max-Age=' + this.maxAge)
    cookie.push('Path=' + this.path)

    if (this.secure) {
      cookie.push('Secure')
    }

    if (this.httpOnly) {
      cookie.push('HttpOnly')
    }

    return cookie.join(';')
  }

}
