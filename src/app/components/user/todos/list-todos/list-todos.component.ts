import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../models/Todo';
import { todoService } from '../services/todo.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {
  @Input() todos: Todo[];
 
  @Output() DeletedItemInfo : EventEmitter<any> = new EventEmitter()
  
  constructor(private todoService :todoService) { }

  ngOnInit(): void {

  }
  
  deleteItemInfoList($event) {
    this.DeletedItemInfo.emit($event)
  }

}
