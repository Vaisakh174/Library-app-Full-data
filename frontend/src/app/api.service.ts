import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getall() {

    return this.http.get("http://localhost:3000/api/getall"); //for local
    // return this.http.get('/api/getall');  //for heroku
  }


  getbyid(_id: any) {
    return this.http.get(`http://localhost:3000/api/getsingle/${_id}`);//for local
    //  return this.http.get(`/api/getsingle/${_id}`);  //for heroku
  }

  posts(data: any) {
    return this.http.post("http://localhost:3000/api/post", data);//for local
    // return this.http.post('/api/post', data);  //for heroku
  }

  //for submission of email and pass to db
  postu(data: any) {
    return this.http.post("http://localhost:3000/api/signup", data); //for local
    // return this.http.post('/api/signup', data);  //for heroku
  }


  deletes(_id: any) {
    return this.http.delete(`http://localhost:3000/api/delete/${_id}`);//for local
    // return this.http.delete(`/api/delete/${_id}`);  //for heroku
  }


  updates(data: any, _id: any) {
    // return this.http.put('/api/update', { data, _id });  //for heroku

    return this.http.put('http://localhost:3000/api/update', { data, _id }); //for local

  }

  
  public mydata: any;//to pass id for reading a abook
  public formupdate: any;  //to pass id for updating a abook

  public username: any;//to pass username 



}
