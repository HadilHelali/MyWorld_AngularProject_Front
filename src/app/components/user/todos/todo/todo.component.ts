import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { todoService } from '../services/todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

 
  constructor(public todoService: todoService) { }

  ngOnInit(): void {
   
  }
  onSubmit(addTodo:NgForm){
    
    this.todoService.addTodo(addTodo.value).subscribe(
      data => {
        console.log("eeeeeeee",data);
      //  this.router.navigateByUrl('/home/read');
      },
      err => {
        console.log("eeeeeeee");}
    );
   
  }
  

}
