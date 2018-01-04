import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  //聲明itemCount是一個可輸入值
  @Input() itemCount: number;

  constructor() { }

  ngOnInit() {
  }

}
