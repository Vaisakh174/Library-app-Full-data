import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-readbook',
  templateUrl: './readbook.component.html',
  styleUrls: ['./readbook.component.css']
})
export class ReadbookComponent implements OnInit {

  constructor(public api: ApiService) { }
  librarydata: any = [{ bookname: "", bookimgaddress: "", author: "", content: "" }];
  ngOnInit(): void {this.getdata()
  }
  _id=this.api.mydata;

  getdata() {
    
    this.api.getbyid(this._id).subscribe(res => {
      this.librarydata = res;
      // console.log("incoming data from readbook getall", this._id);
    });
  }



}