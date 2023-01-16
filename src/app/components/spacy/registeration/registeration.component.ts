import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../authentification/services/auth.services';
import { TokenStorageService } from '../../authentification/services/token-storage.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {
  isSubmitted  =  false;
 
  myform = new FormGroup({
    username : new FormControl('', [Validators.required]),
    firstname : new FormControl('', [Validators.required]),
    lastname : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required , Validators.email]),
    password :new FormControl('', [Validators.required,Validators.minLength(4)])
});

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   
  }
 
  signUp(){
    this.isSubmitted = true;
    console.log(this.myform.valid)
    if(this.myform.valid){
      this.authService.signUp(this.myform.get('username')?.value,
                              this.myform.get('firstname')?.value,
                              this.myform.get('lastname')?.value,
                              this.myform.get('email')?.value,
                              this.myform.get('password')?.value)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigateByUrl('/landing/auth');
        },
        err => {
          
        }
      );
      
    }
   
  }

}
