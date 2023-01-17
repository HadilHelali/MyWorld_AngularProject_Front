import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
import { todoService } from '../services/todo.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];
  
  constructor(private todoService :todoService) { }

  ngOnInit(): void {
  
   this.todoService.getTodos().subscribe(
      (todos)=>{
      //  alert("alo")
        this.todos=todos
      },
      (erreur) => {
        this.todos = this.todoService.getFakeTodos();
        alert(this.todos[0].title)
       
     }
    )
  }

}
