import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BooksService {

  private baseApiPath = "https://www.googleapis.com/books/v1/";

  constructor(private http: Http) {
    
  }

  getBooks(){
    return this.http.get(this.baseApiPath+'volumes?q=harry+potter&'+this.getApiKey()+'&maxResults=12');
  }

  getBookDetails(bookId){
    return this.http.get(this.baseApiPath+'volumes/'+ bookId + '?' + this.getApiKey());
  }

  getApiKey():string{
    return 'key={key}';
  }

}