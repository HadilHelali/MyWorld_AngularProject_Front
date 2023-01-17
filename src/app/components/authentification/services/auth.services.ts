import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ConstantURL } from "src/app/ConstantsUrl";
import { TokenStorageService } from "./token-storage.service";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient , private tokenStorageService : TokenStorageService) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post(ConstantURL.LOGIN_URL, {
          "username":username,
          "password":password
        }, httpOptions);
      }
    signUp(username: string, firstname : string ,lastname: string , email: string,password: string,):Observable<any>{

      return this.http.post(ConstantURL.REGISTER_URL, {
        "login":username,
        "prenom":firstname,
        "nom":lastname,
        "email":email,
        "password":password,
        "role":"user"
      }, httpOptions);
    }

    isConnected() : boolean {
      if (this.tokenStorageService.getUser().login === undefined )
      return false
      else return true

    }
}
