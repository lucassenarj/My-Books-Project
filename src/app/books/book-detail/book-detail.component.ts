import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  providers: [
    BooksService
  ]
})
export class BookDetailComponent implements OnInit {

  public bookId:string;
  public book: Array<any>;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bookId = params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
    
    this.booksService.getBookDetails(this.bookId)
      .subscribe(data=>{
        const response = (data as any);
        const object_return = JSON.parse(response._body);
        this.book = object_return.volumeInfo;
        console.log(this.book);
      }, error=>{
        console.log(error);
      }
    )
    
    console.log(this.bookId);
  }

}
