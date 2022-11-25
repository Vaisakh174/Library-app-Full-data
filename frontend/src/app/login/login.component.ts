import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  loginform: any = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email, Validators.minLength(5)]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)])
  })


  get f() {
    return this.loginform.controls;
  }

  logincheck() {
    this.auth.loginuser(this.loginform.value).subscribe({

      next: (res) => {

        localStorage.setItem('token', res.token);
        // console.log("success from login  ", res.token,res.USER);   //to view token in browser
        alert("Login success");
        localStorage.setItem('currentuser', res.USER);
        this.router.navigate(['/books']);

      },
      error: (err) => {

        // console.log("error from login ", err.error);     //to view error in browser
        alert(`Error...  ${err.error}`);

      }

    });
  }




}
