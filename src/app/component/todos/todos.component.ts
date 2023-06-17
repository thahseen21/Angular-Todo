import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  constructor() {
    this.todos = [
      { id: 1, name: 'test 1', isCompleted: false, isDeleted: false },
      { id: 2, name: 'test 2', isCompleted: false, isDeleted: false },
      { id: 3, name: 'test 3', isCompleted: false, isDeleted: false },
    ];
  }

  // Trigger first, trigger when changes in props coming from parent
  ngOnChanges(newTodo: string): void {
    console.log(`[TodosComponent] ngOnChanges ${JSON.stringify(newTodo)}`);
  }

  // Trigger after ngOnChanges, and only triggers for the first time of component initialization
  ngOnInit(): void {
    console.log(`[TodosComponent] ngOnit`);
  }

  ngDoCheck() {
    console.log(`[TodosComponent] ngDoCheck`);
  }

  @Input() title: string = '';

  newTodo: string = '';
  todos: todo[] = [];

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
