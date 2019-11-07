import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  todoes = [];
  @Output() todoNameInput = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  OnTodoInput(todoName: string) {
    this.todoNameInput.emit(todoName);
  }
}
