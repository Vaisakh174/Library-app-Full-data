import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {

  constructor(public api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getdata()
  }

  _id = this.api.formupdate;
  librarydata: any = {

    bookname: "",
    bookimgaddress: "",
    content: "",
    author: "",

  }

  getdata() {

    this.api.getbyid(this._id).subscribe(res => {
      this.librarydata = res;
      // console.log("incoming data from update, get id", this._id);
      this.setoldvalue()
    });
  }

  updatebookform: any = new FormGroup({
    bookname: new FormControl("", [Validators.required, Validators.minLength(5)]),
    author: new FormControl("", [Validators.required, Validators.minLength(5)]),
    bookimgaddress: new FormControl("", [Validators.required, Validators.minLength(5)]),
    content: new FormControl("", [Validators.required, Validators.minLength(5)])
  })
  setoldvalue() {
    this.updatebookform.setValue({
      bookname: this.librarydata.bookname,
      author: this.librarydata.author,
      bookimgaddress: this.librarydata.bookimgaddress,
      content: this.librarydata.content

    })
  }

  updatebook() {

    this.api.updates(this.updatebookform.value,this._id).subscribe((res) => {
      // this.blogerDatas = res;
      // console.log("incoming data from update form ",this.updatebookform.value);
    this.router.navigate(['/books/booksList']);
    });
  }

}
