import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ForgetPwdService {
  public validateEmailUrl = 'mock-data/forget-pwd-mock.json';
  constructor( public http: Http) { }

  public sendValidationEmail(email: string):Observable<any>{
    return this.http.get(this.validateEmailUrl)
      .map((res: Response) => res.json())
  }
}