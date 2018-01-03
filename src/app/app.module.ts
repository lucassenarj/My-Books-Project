import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { SearchResultsComponent } from './books/search-results/search-results.component';
import { FooterComponent } from './footer/footer.component';

import { BooksService } from './services/books.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookListComponent,
    BookDetailComponent,
    SearchResultsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
