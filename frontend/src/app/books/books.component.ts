import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private router: Router, public auth: AuthService, private api: ApiService) { }
  user: any;
  ngOnInit(): void {
    this.user = localStorage.getItem('currentuser');

  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentuser');
    this.router.navigate([""]);
  }

}
