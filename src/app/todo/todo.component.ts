import { Todo } from './todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoes: Todo[] = [];
  constructor() {}

  ngOnInit() {}

  addTodo(todoName: string): void {
    console.log(todoName);
    // Save todo to datebase and get a new ID
    this.todoes = [...this.todoes, new Todo(todoName)];
  }
}
