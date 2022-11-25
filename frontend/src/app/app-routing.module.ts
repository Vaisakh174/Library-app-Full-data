import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReadbookComponent } from './readbook/readbook.component';

import { SignupComponent } from './signup/signup.component';
import { UpdateformComponent } from './updateform/updateform.component';
import { AuthGuard } from './auth.guard';
import { CarousalComponent } from './carousal/carousal.component';

const routes: Routes = [

  {
    path: "", component: HomeComponent,
    children: [{ path: "login", component: LoginComponent }, { path: "", component: CarousalComponent }, { path: "signup", component: SignupComponent }]
  },

  {
    path: "books", component: BooksComponent,canActivate:[AuthGuard],
    children: [{ path: "", component: BooksListComponent },{path:"updateform",component:UpdateformComponent},{path: "readbooks", component: ReadbookComponent}, { path: "booksList", component: BooksListComponent }, { path: "addBook", component: AddBookComponent }]
  }
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
