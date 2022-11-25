import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
  }

  signupform: any = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5)]),
    email: new FormControl("", [Validators.required, Validators.email, Validators.minLength(5)]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)]),
  })

  get f() {
    return this.signupform.controls;
  }

  signupcheck() {
    this.api.postu(this.signupform.value).subscribe({
      next: (res) => {

        alert("Data saved successfully")
        this.router.navigate(['/login']);
      
      // console.log("incoming data from signup res ",res);  //to view response in browser

      },
      error: (err) => {
        // console.log("error from login ", err.error);     //to view error in browser
        alert(`Error...  ${err.error}`);
      }
      // ,
      // complete: () =>{
      //   console.iog('complete') // to view error in req is completed or not
      // } 
    }

    );
  }












}
