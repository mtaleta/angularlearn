import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Post} from './post';

@Injectable()
export class PostTableService {
  private getPostsURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {}

  getPosts(): Observable<Post[]> {
    return this.http.get(this.getPostsURL)
      .map((response: Response) => response.json());
  }
}
//   public delURL: string="";
//   public toEditURL: string="";
//   constructor(public http: Http) { }

//   public getPostTable(dataURL:string){
//     return this.http.get(dataURL)
//       .map((res:Response) => res.json())
//       .catch((error:any) => Observable.throw(error || 'Server error'));
//   }

// public del(postId: number):Observable<any>{
//     return this.http.delete(this.delURL)
//       .map((res: Response) => res.json());
//   }

//   public toEdit(postId: number):Observable<any>{
//     return this.http.get(this.toEditURL)
//       .map((res: Response) => res.json());
//   }
// }
