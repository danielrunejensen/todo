import { Todo } from '../todo';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo = new EventEmitter<number>();
  @Output() setIsCompletedTodo = new EventEmitter<object>();

  constructor() {}

  ngOnInit() {}

  OnClickSetIsCompletedTodo(isCompleted: boolean): void {
    this.setIsCompletedTodo.emit({ id: this.todo.id, isCompleted });
  }

  OnClickDeleteTodo(): void {
    this.deleteTodo.emit(this.todo.id);
  }
}
