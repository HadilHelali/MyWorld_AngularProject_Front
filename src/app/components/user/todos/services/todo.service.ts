import { Injectable } from '@angular/core';
import {Todo} from '../models/Todo';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { ConstantURL } from '../../../../ConstantsUrl';
import { TodoStatusEnum } from '../enum/todo-status.enum';


const API_LINK = ConstantURL.TODO_URL;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class todoService {
  Todos: Todo[];
  selectItemSubject = new Subject<Todo>();
  constructor(
    private http: HttpClient
  ) {
  }
  getFakeTodos() {
    return this.Todos = [
      new Todo(1, 'dishes',Date(),"boring"),
      new Todo(2, 'web',Date(),"mardh"),

    ];
  }
  getTodos(): Observable<Todo[]> {
   // alert("sending")
    return this.http.get<Todo[]>(API_LINK);
  }
  getFakeTodoById(id) {
    // 1 == '1'
    return this.Todos.find(
      (Todo) => Todo.id === +id
    );
  }
  getTodoById(id): Observable<Todo> {
    return this.http.get<Todo>(API_LINK + `/${id}`);
  }
  selectItem(Todo: Todo) {
    this.selectItemSubject.next(Todo);
  }
  deleteTodo(id): Observable<any> {
    return this.http.delete(API_LINK  + `/${id}`,httpOptions);
  }

  addTodo(Todo: Todo): Observable<any> {
    return this.http.post(API_LINK, { 
      "name": Todo.name,
       "description": Todo.description,
      "status": TodoStatusEnum.waiting},
       httpOptions);
  }
  updateTodo(state:TodoStatusEnum,id){
    return this.http.patch(API_LINK + `/${id}`,state);
  }
  
}