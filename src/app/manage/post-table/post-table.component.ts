import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment } from '@angular/router';
// import { PostTableService } from './services/post-table.service';
// import { DataTableModule } from 'primeng/primeng';
import { PostTableService } from './service/post-table.service';
import { Observable } from 'rxjs/Observable';
import { Post } from './service/post';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit {

  posts: Observable<Post[]>;

  constructor(
    private postTableService: PostTableService
  ) { }

  ngOnInit(): void {
    this.posts = this.postTableService.getPosts();
  }
  // public getPostsByPage(page:Number){
  //   return this.postTableService.getPostTable(this.dataURL).subscribe(
  //     res=>{
  //       console.log(res);
  //       this.postList = res.items;
  //     },
  //     error => {
  //       console.log(error)
  //     },
  //   );
  // }
  
}
