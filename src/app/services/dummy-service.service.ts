import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DummyServiceService {

  //set base  url for API
  baseUrl = "http://localhost:8080/api/v1/";

  //set header key
  headerKey="5fc0a77b1399640b5f7dfb8d";

  constructor(private http: HttpClient, private cookieService: CookieService) { }


  // get list of all products
  getProducts() : Observable<any>{
   
    return this.http
    .get(this.baseUrl + "product", { observe: 'response'})
  }

  // get product detail
  getProductDetail(id: number) : Observable<any>{
   
    return this.http
    .get(this.baseUrl + "product/" + id, { observe: 'response'})
  }
  getOrderByUserId() : Observable<any>{
    let headers = new HttpHeaders()
    headers = headers.append('Authorization', `Bearer ${this.cookieService.get('jwt')}`);
    console.log(headers)
    return this.http
    .get(this.baseUrl + "user/orders", { observe: 'response', headers:headers})
  }
  getCartByUserId(data: any) : Observable<any>{
   
    return this.http
    .get(this.baseUrl + "user/cart", { observe: 'response'})
  }

  deleteItemFromCart(data: any) : Observable<any>{
   
    return this.http
    .delete(this.baseUrl + "user/cart/" + data, { observe: 'response'})
  }

  addItemToCart(data: any) : Observable<any>{
    let headers = new HttpHeaders()
    headers = headers.append('Authorization', `Bearer ${this.cookieService.get('jwt')}`);
    console.log(headers)
    return this.http
    .post(this.baseUrl + "user/cart/" + data, null, { observe: 'response', headers: headers})
  }

  checkout(data: any) : Observable<any>{
    let headers = new HttpHeaders()
    headers = headers.append('Authorization', `Bearer ${this.cookieService.get('jwt')}`);
    return this.http
    .post(this.baseUrl + "user/cart/checkout", data, { observe: 'response', headers: headers})
  }


}
