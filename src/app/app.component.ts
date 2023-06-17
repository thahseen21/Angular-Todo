import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';

  newTodo: string = '';
  todos: todo[] = [];

  constructor() {
    this.todos = [
      { id: 1, name: 'test 1', isCompleted: false, isDeleted: false },
      { id: 2, name: 'test 2', isCompleted: false, isDeleted: false },
      { id: 3, name: 'test 3', isCompleted: false, isDeleted: false },
    ];
  }

  addTodo() {
    this.todos.push({
      id: this.todos.length + 1,
      name: this.newTodo,
      isCompleted: false,
      isDeleted: false,
    });
    this.newTodo = '';
  }

  removeTodoById(todoId: number) {
    let selectedTodo = this.todos.find((todo) => todoId == todo.id);
    if (selectedTodo) selectedTodo.isDeleted = true;

    console.log(selectedTodo);
  }
}

type todo = {
  id: number;
  name: string;
  isCompleted: boolean;
  isDeleted: boolean;
};
