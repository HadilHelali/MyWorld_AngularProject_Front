import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoStatusEnum } from '../enum/todo-status.enum';
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
  isDeleted = false;
  completed: boolean = false;
  @Output() DeletedItem : EventEmitter<any> = new EventEmitter()

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
    this.todoInput.status=status
    this.todoService.updateTodo(status,this.todoInput.id).subscribe(data => {
      
    },
    err => {
      })

  }
  toggleClass() {

    if (this.todoInput.status.valueOf()=="done") {
      // return 'list-item-success';
      return { 'list-group-item-success': true, 'border-primary': true };

    }
 
  }
  buttonClass(status){
    if (this.todoInput.status.valueOf()=="status") {
      // return 'list-item-success';
      return { "btn btn-primary btn-sm disabled": true };

    }else{
      return { "badge badge-pill badge-primary enabled": true };
    }

  }
  deleteTodoInfo(item) {
    this.DeletedItem.emit(item)

  }
}
