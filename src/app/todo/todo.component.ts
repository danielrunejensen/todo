import { SHOW } from './show';
import { Todo } from './todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoes: Todo[] = [];
  activeTodoesCount: number;
  show: number = SHOW.ALL;

  constructor() {
    this.CalculateActiveTodoesCount();
  }

  ngOnInit() {}

  getTodoes(): Todo[] {
    let result = this.todoes;

    if (this.show === SHOW.ACTIVE) {
      result = this.todoes.filter((todo) => todo.isCompleted === false);
    } else if (this.show === SHOW.COMPLETED) {
      result = this.todoes.filter((todo) => todo.isCompleted === true);
    }

    return result;
  }

  CreateTodo(name: string): void {
    if (name) {
      this.todoes = [...this.todoes, new Todo(name)];
      this.CalculateActiveTodoesCount();
    }
  }

  DeleteTodo(id: number): void {
    this.todoes = this.todoes.filter((todo) => todo.id !== id);
    this.CalculateActiveTodoesCount();
  }

  SetIsCompletedTodo(object): void {
    this.todoes = this.todoes.map((todo) => {
      if (todo.id === object.id) {
        todo.isCompleted = object.isCompleted;
      }
      return todo;
    });
    this.CalculateActiveTodoesCount();
  }

  ClearAllCompletedTodoes(): void {
    this.todoes = this.todoes.filter((todo) => todo.isCompleted === false);
    this.CalculateActiveTodoesCount();
  }

  setShowTodoes(show: number): void {
    this.show = show;
  }

  CalculateActiveTodoesCount() {
    // There must be a better way than to do this? Some kind of binding i have over looked?
    this.activeTodoesCount = this.todoes.filter((todo) => todo.isCompleted === false).length;
  }
}
