import { Todo } from '../todo';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  @Input() todoes: Todo[];
  @Output() deleteTodo = new EventEmitter<number>();
  @Output() setIsCompletedTodo = new EventEmitter<object>();

  constructor() {}

  ngOnInit() {}

  OnDeleteTodo(todoId: number): void {
    this.deleteTodo.emit(todoId);
  }

  OnSetIsCompletedTodo(object): void {
    this.setIsCompletedTodo.emit(object);
  }
}
