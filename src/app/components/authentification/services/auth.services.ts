import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ConstantURL } from "src/app/ConstantsUrl";

const type = "Bearer";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post(ConstantURL.LOGIN_URL, {
          "username":username,
          "password":password
        }, httpOptions);
      }
    signUp(username: string, firstname : string ,lastname: string , email: string,password: string,):Observable<any>{
      //todo  
      return this.http.post(ConstantURL.REGISTER_URL, {
        "login":username,
        "prenom":firstname,
        "nom":lastname,
        "email":email,
        "password":password,
        "role":"user"
      }, httpOptions);
    }
}