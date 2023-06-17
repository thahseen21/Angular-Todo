import { Component } from '@angular/core';
import { TodosComponent } from './component/todos/todos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo App';

  ngOnInit(): void {
    console.log(`[AppComponent] ngOnit`);
  }

  changeTitle() {
    this.title = 'Totodo App';
  }
}
