import { Todo } from '../todo';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {}

  ngOnInit() {}

  setCompleted(completed: boolean) {
    this.todo.isCompleted = completed;
  }
}
