import { Routes } from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list';

export const routes: Routes = [
  {
    path: '',
    component: TodoListComponent, // route racine
  }
];
