import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [
    BooksService
  ]
})
export class BookListComponent implements OnInit {
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();

  books: Array<any>;

  constructor(
    private booksService: BooksService,
    private router: Router
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

  getListBooks(){
    //console.log(this.books);
  }

  openBookDetails(event, bookId){
    console.log(bookId);
    this.router.navigate(['book', bookId]);
  }
  

}
