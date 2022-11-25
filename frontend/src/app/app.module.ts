import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BooksListComponent } from './books-list/books-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReadbookComponent } from './readbook/readbook.component';
import { ApiService } from './api.service';
import { UpdateformComponent } from './updateform/updateform.component';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { CarousalComponent } from './carousal/carousal.component';

@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    SignupComponent,
    BooksComponent,
    HomeComponent,
    BooksListComponent,
    AddBookComponent,
    ReadbookComponent,
    UpdateformComponent,
    CarousalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule, FormsModule,HttpClientModule
  ],
  providers: [ApiService,AuthService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
