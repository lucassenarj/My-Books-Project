import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [
    BooksService
  ]
})
export class BookListComponent implements OnInit {
  books: Array<any>;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getBooks()
      .subscribe(data=>{
        const response = (data as any);
        const object_return = JSON.parse(response._body);
        this.books = object_return.items;
        console.log(this.books);
      }, error=>{
        console.log(error);
      }
    )
  }

  getListBooks(){
    console.log(this.books);
  }
  

}
