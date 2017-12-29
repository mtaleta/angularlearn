import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Post} from './post';

@Injectable()
export class PostTableService {
  private getPostsURL = 'https://jsonplaceholder.typicode.com/posts';
  
  // private getPostsURL = 'mock-data/postlist-mock.json';
  
  
  constructor(private http: Http) {}

  getPosts(): Observable<Post[]> {
    return this.http.get(this.getPostsURL)
      .map((response: Response) => response.json());
  }
}

