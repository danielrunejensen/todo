export class Todo {
  id: number;
  name: string;
  isCompleted: boolean;

  constructor(name: string) {
    this.id = Math.round(Math.random() * 10 * (Math.random() * 100));
    this.name = name;
    this.isCompleted = false;
  }
}
