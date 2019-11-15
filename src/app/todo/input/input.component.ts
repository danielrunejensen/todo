import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  inputForm = new FormControl();
  @Output() createTodo = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  OnKeyUpEnterCreateTodo(todoName: string) {
    this.inputForm.reset();
    this.createTodo.emit(todoName);
  }
}
