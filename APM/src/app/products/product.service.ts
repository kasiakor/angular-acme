import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

private productsUrl = 'api/products/product.json';

//provide the instance of http client service 
  constructor( private http: HttpClient ) {}
    getProducts(): Observable<IProduct[]> {
      return this.http.get<IProduct[]>(this.productsUrl)  
    }
}