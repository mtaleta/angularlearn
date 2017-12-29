import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment } from '@angular/router';

import { PostTableService } from './service/post-table.service';
import { Observable } from 'rxjs/Observable';
import { Post } from './service/post';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
// pipi寫法
// export class PostTableComponent implements OnInit {

//   posts: Observable<Post[]>;

//   constructor(
//     private postTableService: PostTableService
//   ) { }

//   ngOnInit(): void {
//     this.posts = this.postTableService.getPosts();
//   }

// Subscribe()
export class PostTableComponent implements OnInit {
  posts: Post[];
  constructor(private postTableService: PostTableService) { }
  
  ngOnInit(): void {
    this.postTableService.getPosts()
      .subscribe(
        (posts: Post[]) => this.posts = posts,
        (error: any) => console.log(error),
        () => console.log('Get posts completed')
      );
  }
}
