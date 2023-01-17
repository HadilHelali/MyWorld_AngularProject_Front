import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-user-listcomponement',
  templateUrl: './user-listcomponement.component.html',
  styleUrls: ['./user-listcomponement.component.scss']
})
export class UserListcomponementComponent implements OnInit {
  users:[]
   @Input() user:any
   @Output() userid=new EventEmitter<string>();
  columns:any
  nomHeader: string;
    prenomHeader: string;
    totalPage:Number
  isSubmitted  =  false;
  pagination:number=0


    cols: any[];
     constructor(private router:Router,private _AdminService:AdminService) { 
     }
  ngOnInit(): void {
    this.getallUser(this.pagination)
    this.cols = [
     
      { field: 'Lastname' },
      { field: 'Firstname' },
      { field: 'Email' },
      { field: 'Role' },
  ]

  }


  getPrevious() {
   this.pagination-=1
   if(this.user)
   this.RecherhceUser(this.pagination)
   else
   this.getallUser(this.pagination)
}

/**
 * The next elements in pagination
 */
getNext() {
  this.pagination+=1
  if(this.user)
   this.RecherhceUser(this.pagination)
   else
   this.getallUser(this.pagination)

}

getallUser(pagination){
  this._AdminService.getAllUser(pagination)
  .subscribe(
    data => {
      this.users=data.data
      this.totalPage= Math.trunc(data.count/5);
      if(data.count/5>1)
      this.totalPage=Math.trunc(data.count/5)+1
    },
    err => {
      
    });
}
RecherhceUser(pagination){
  this._AdminService.RecherhceUser(this.user,pagination)
  .subscribe(
    data => {
      this.users=data.data
    
      this.totalPage= Math.trunc(data.count/5);
      if(data.count/5>1)
      this.totalPage=Math.trunc(data.count/5)+1
   
    },
    err => {
      
    });
}

/**
     * The On Changes
     */
ngOnChanges(changes: SimpleChanges) {
  this.RecherhceUser(0);
  // You can also use categoryId.previousValue and 
  // categoryId.firstChange for comparing old and new values
  
}

getdetails(id){
  this.userid.emit(id)
}

}
