import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginuser(user: any) {
    return this.http.post<any>("http://localhost:3000/api/login", user); //for local
    // return this.http.post<any>("/api/login", user);   //for heroku
  }


loggedin(){
  return !!localStorage.getItem('token')
}

getToken(){
  return  localStorage.getItem('token');
}

}
