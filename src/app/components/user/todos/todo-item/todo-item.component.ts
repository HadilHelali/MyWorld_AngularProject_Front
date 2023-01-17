import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
import { todoService } from '../services/todo.service';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todoInput: Todo;
  isDeleted=false;
  completed: boolean = false;
  todo: Todo;
  constructor(public todoService: todoService,/*private toasterService: ToastrService*/) { }

  ngOnInit(): void {
  }

  onChange() {
    console.log("changed");
    this.completed = !this.completed;
    //this.completed ? this.toasterService.success(`Todo succesfully completed`, 'completed') : '';

  }

  onCliCk(e) {
    console.log("Clicked");
    console.log(e);
  }
  setStatus(status){
    this.todo.status=status
    this.todoService.updateTodo(status,this.todo.id)

  }
  toggleClass() {
    if (this.todo.status.valueOf()=="done") {
      // return 'list-item-success';
      return { 'list-group-item-success': true, 'border-primary': true };

    }
 
  }
  buttonClass(status){
    if (this.todo.status.valueOf()=="status") {
      // return 'list-item-success';
      return { "btn btn-primary btn-sm disabled": true };

    }else{
      return { "badge badge-pill badge-primary enabled": true };
    }

  }
  deleteTodo(item) {
    this.isDeleted=true;
    this.todo = item;
    this.todoService.deleteTodo(item);
   // this.toasterService.error(`Todo ${item.id} Deleted!`, 'Deleted Successfuly');
  
  }
}
