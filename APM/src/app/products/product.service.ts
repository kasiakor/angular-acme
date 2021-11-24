import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

private productsUrl = 'api/products/products.json';

//provide the instance of http client service 
  constructor( private http: HttpClient ) {}
    getProducts(): Observable<IProduct[]> {
      return this.http.get<IProduct[]>(this.productsUrl).pipe(
        tap(data => console.log(data)),
        catchError(this.handleError)

      )  
    }
    private handleError(err: HttpErrorResponse): Observable<never> {
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
  }