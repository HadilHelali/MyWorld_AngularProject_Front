import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../../authentification/services/token-storage.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-profilecomponement',
  templateUrl: './admin-profilecomponement.component.html',
  styleUrls: ['./admin-profilecomponement.component.scss']
})
export class AdminProfilecomponementComponent implements OnInit {
  myform = new FormGroup({
    nom : new FormControl('', []),
    login : new FormControl('', []),
    email :new FormControl('', []),
    prenom :new FormControl('', [])
});
  constructor(private _TokenStorageService:TokenStorageService,private _AdminService:AdminService) { }
   @Input() user:any
  
  ngOnInit(): void {
    
  }

  update(){
  const data={
    newuser:this.myform.value,
    userid:this.user.id
   }
   this._AdminService.updateUser(data)
    .subscribe(
      data => {
        this.user=data

        if(this.user.roles=='admin')
        this._TokenStorageService.saveUser(this.user)
      },
      err => {
        
      });
  }

}
