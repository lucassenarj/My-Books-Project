import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BooksService {

  private baseApiPath = "https://www.googleapis.com/books/v1/";
  //private baseApiKey = '';

  constructor(private http: Http) {
    
  }

  getBooks(){
    return this.http.get(this.baseApiPath+'volumes?q=angular'+this.getApiKey());
  }

  getApiKey():string{
    return '&key=AIzaSyCYL3f7_BIqzzfWMqmB71I_DXKWPLeCNUc';
  }

}
