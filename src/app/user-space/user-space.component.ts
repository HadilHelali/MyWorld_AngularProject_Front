import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../components/authentification/services/token-storage.service';

@Component({
  selector: 'app-user-space',
  templateUrl: './user-space.component.html',
  styleUrls: ['./user-space.component.scss']
})
export class UserSpaceComponent implements OnInit {
  isCollapsed = true;
  username :String ="username";
  constructor(private router: Router,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.username = this.tokenStorage.getUser().login
  }

  logOut(){
    this.tokenStorage.signOut()
    this.router.navigate(['/landing'])
  }

}
