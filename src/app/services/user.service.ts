import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLogin = false;
  token=""
  baseUrl = "http://localhost:8080/api/v1/"
  constructor(private http: HttpClient,
    private cookieService: CookieService) { }
  //get list of all users
  login(data: any) : Observable<any>{
    return this.http
    .post(this.baseUrl + "login", data)
  }

  //get user profile
  getUserProfile() : Observable<any>{
    let headers = new HttpHeaders()
    headers = headers.append('Authorization', `Bearer ${this.cookieService.get('jwt')}`);
    return this.http
    .get(this.baseUrl + "user/profile", { observe: 'response', headers: headers })
  }
}
