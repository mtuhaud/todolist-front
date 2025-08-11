import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {Todo} from '../todo.model';
import {TodoService} from '../todo.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [
    DatePipe
  ],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoListComponent implements OnInit {

  todos: WritableSignal<Todo[]> = signal([]);
  private readonly todoService = inject(TodoService);

  constructor(){}

  ngOnInit() {
    console.log('dans getTasks');
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe({
      next: (data) => {
        console.log(data);
        this.todos.set(data.todos);
        console.log(this.todos);
        },
      error: () => { console.log('Erreur lors de la récupération des tâches')}}
    )
  }

}
