import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { wishItem } from '../../shared/models/wishitem';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) {}
  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }
  
  getWishes() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    });
   // return this.http.get('http://localhost:3000/0').pipe(catchError(this.handleError))
   return this.http.get('https://localhost:7204').pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('There is an issue with the client or network:', error.error);
    } else {
      console.error('Server-side error: ', error.error)
    }

    return throwError(() => new Error('Cannot retrieve wishes from the server. Please try again.'));
  }

  saveWishes(wishes: wishItem[]){
    let options = this.getStandardOptions();
    options.headers = options.headers.set("Content-Type", "application/json", "Authorization");
    console.log(JSON.stringify(wishes));
    return this.http.post('https://localhost:7204',wishes,options);
  }
  // private addWish(wish: wishItem) {
  //   let options = this.getStandardOptions();

  //   options.headers = options.headers.set('Authorization', 'value-need-for-authorization');
  //   this.http.post('http://localhost:7204', wish, options);
  // }
}

// to start the server write 'json-server --watch wishes.json'
