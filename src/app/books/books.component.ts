import { Component, OnInit } from '@angular/core';
import { BooksService } from './../services/books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [
    BooksService
  ]
})
export class BooksComponent implements OnInit {

  books: Array<any>;

  //books: Array<any> = ['imageLinks' > 'dsadasdsa'];


  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit() {
      this.booksService.getBooks()
        .subscribe(data=>{
          const response = (data as any);
          const object_return = JSON.parse(response._body);
          this.books = object_return.items;
          //console.log(this.books);
        }, error=>{
          console.log(error);
        }
      )
  }

}
