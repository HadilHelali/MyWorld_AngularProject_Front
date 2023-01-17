import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../authentification/services/token-storage.service';
import { AdminService } from './services/admin.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {
  numberCard = '0';
  userid:number
  user:any
  constructor(private router:Router,private _AdminService:AdminService,private route: ActivatedRoute,private _TokenStorageService:TokenStorageService) { }

  ngOnInit(): void {
    this.user=this._TokenStorageService.getUser()
  }

  getuserById(id){
    this._AdminService.userBYId(id)
    .subscribe(
      data => {
        this.user=data
      },
      err => {
        
      });
  }

   /**
     * Change affichage Card number
     * @param numCard numero de card a afficher dans le menu de navigation
     */
   changeCard(numCard: string) {
    this.numberCard = numCard;
    this.user=this._TokenStorageService.getUser()
}

getuserdetails(id){
  this.numberCard='1'
  this.getuserById(id)
}
logOut(){
  this._TokenStorageService.signOut()
  this.router.navigate(['/landing'])
}
}
