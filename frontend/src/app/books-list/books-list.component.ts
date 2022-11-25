import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, public auth: AuthService) { }

  libraryData: any = [{ bookname: "", bookimgaddress: "", author: "", content: "" }];

  ngOnInit(): void {
    this.getdata()
  }

  getdata() {
    this.api.getall().subscribe(res => {
      this.libraryData = res;
      // console.log("incoming data from booklist getall", this.libraryData);
    });
  }

  readmore(_id: string) {

    this.api.mydata = _id;
    // console.log(_id)
    this.router.navigate(['/books/readbooks']);

  }

  update(_id: any) {
    this.api.formupdate = _id;
    this.router.navigate(['/books/updateform']);
  }

  deletes(_id: any) {

    this.api.deletes(_id).subscribe((res) => {
      // this.blogerDatas = res;
      // console.log("incoming data from updatecount ", res);
      this.getdata()
    })
  }
}
