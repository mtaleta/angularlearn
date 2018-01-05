import { Component, OnInit, Inject } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  // filterTodos: any;
  todos: Todo[] = [];
  desc: string = '';

  constructor(
    @Inject('todoService') 
    private service,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // this.getTodos();
    this.route.paramMap.forEach((params: Params) => {
      let filter = params['filter'];
      this.filterTodos(filter);
    })
  }

  addTodo(){
    this.service
      .addTodo(this.desc)
      .then(todo => {
        this.todos = [
          ...this.todos, todo
        ];
        this.desc = '';
      });
    // this.todos = this.service.addTodo(this.desc);
    // this.desc = '';
  }
  toddleTodo(todo: Todo) {
    const i = this.todos.indexOf(todo);
    this.service
      .toggleTodo(todo)
      .then(t => {
        this.todos = [
          ...this.todos.slice(0,i),
          t,
          ...this.todos.slice(i+1)
        ];
      });
  }

  removeTodo(todo: Todo):Promise<void> {
    const i = this.todos.indexOf(todo);
    return this.service
      .deleteTodoById(todo.id)
      .then(() => {
        this.todos = [
          ...this.todos.slice(0,i),
          ...this.todos.slice(i+1)
        ];
        return null;
      });
  }

  onTextChanges(value) {
    this.desc = value;
  }

  filterTodos(filter: string): void {
    this.service
      .filterTodos(filter)
      .then(todos => this.todos = [...todos])
  }

  toggleAll() {
    Promise.all(this.todos.map(todo => this.toddleTodo(todo)));
  }

  clearCompleted(){
    const completed_todos = this.todos.filter(todo => todo.completed === true);
    const active_todos = this.todos.filter(todo => todo.completed === false);
    Promise.all(completed_todos.map(todo => this.service.deleteTodoById(todo.id)))
    // const todos = this.todos.filter(todo => todo.completed === true);
    // todos.forEach(todo => this.removeTodo(todo));
  }
}
