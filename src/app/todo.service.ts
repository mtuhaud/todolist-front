import {inject, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo, TodoResponse} from './todo.model';

@Injectable({providedIn: "root"})
export class TodoService {

  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8080'

  getTodos(): Observable<TodoResponse> {
    console.log('dans getTodos');
    return this.http.get<TodoResponse>(`${this.baseUrl}/todos`)
  }
}
