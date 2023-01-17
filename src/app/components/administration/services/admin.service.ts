import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ConstantURL } from "src/app/ConstantsUrl";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  @Injectable({
    providedIn: 'root'
  })
  export class AdminService {
   
      constructor(private http: HttpClient) { }
    getAllUser(pagination):Observable<any>{
      const body={pagination:pagination}
        return this.http.post(ConstantURL.Users_Url,body)
    }
     
    RecherhceUser(data,pagination):Observable<any>{
      
      const check = JSON.parse(JSON.stringify(data),
(key, value) => value === null || value === '' ? undefined : value); 

      const body={pagination:pagination,user:check}
        return this.http.post(ConstantURL.RecherhceUser_Url,body)
    }
   
    userBYId(id):Observable<any>{
      const body={userid:id}
      console.log("body",body)
        return this.http.post(ConstantURL.userById_Url,body)
    }
    updateUser(data){
      return this.http.post(ConstantURL.UpdateuserById_Url,data)
    }
  }