import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Image } from '../domain/entities';

@Injectable()
export class BingImageService {

  imageUrl: string;
  headers = new Headers({
    'Content-Type': 'application/json',
    'Ocp-Apim-subscription-Key': 'f5f563cae1ce483fb7aaa078076720f1'
  });

  constructor(private http: Http) {
    const q = '北極';
    const baseUrl: string = `https://api.cognitive.microsoft.com/bing/v7.0/images/search`;
    this.imageUrl = baseUrl + `?q=${q}&count=5&mkt=zh-TW&imageType=Photo&size=Large`;
  }

  getImageUrl(): Observable<Image[]>{
    return this.http.get(this.imageUrl, { headers: this.headers })
      .map(res => res.json().value as Image[])
      .catch(this.handleError)
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error')
  }
}