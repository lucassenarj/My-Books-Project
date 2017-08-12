import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BooksService } from './services/books.service';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { LimitToPipe } from './pipes/limit-to.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    LimitToPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
