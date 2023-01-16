import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.services';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  isSubmitted  =  false;
 
  myform = new FormGroup({
    username : new FormControl('', [Validators.required]),
  password :new FormControl('', [Validators.required,Validators.minLength(4)])
});

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   
  }
 
  signIn(){
    this.isSubmitted = true;
    console.log(this.myform.valid)
    if(this.myform.valid){
      this.authService.login(this.myform.get('username')?.value,this.myform.get('password')?.value)
      .subscribe(
        data => {
          console.log(data);
          this.tokenStorage.saveToken(data.token.access_token);
          this.tokenStorage.saveUser(data.user);
          if(data.user.roles=='admin')
             this.router.navigateByUrl('Admin');
          else
            this.router.navigateByUrl('/');
        },
        err => {
          
        }
      );
      
    }
   
  }

}
