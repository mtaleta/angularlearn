import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Message } from './forget-pwd.model';

@Injectable()
export class ForgetPwdService {
  private api_url = 'http://localhost:3000/forget-pwd-mock';
  private headers = new Headers({'Content-Type': 'appliction/json'})
  constructor(private http: Http) {}
  //Get
  gets(): Promise<Message[]>{
    return this.http.get(this.api_url)
      .toPromise()
      .then(res => res.json() as Message[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any>{
      console.error('message errored', error);
      return Promise.reject(error.message || error)
  }
  // public api_url = 'http://localhost:8081/forget';

  // public validateEmailUrl = 'mock-data/forget-pwd-mock.json';
  // constructor( public http: Http) { }

  // public sendValidationEmail(email: string):Observable<any>{
  //   return this.http.get(this.validateEmailUrl)
  //     .map((res: Response) => res.json())
  // }
}