import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router} from '@angular/router';
import { DummyServiceService } from 'src/app/services/dummy-service.service';
import { Product } from '../../models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'post-card',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {
  @Input('product') product!: Product;
  constructor(private ds : DummyServiceService, public dialog: MatDialog,  private cookieService: CookieService) { }

  ngOnInit(): void {
    
  }
  checkout(){
    if (!this.cookieService.check('jwt')){
      const dialogRef = this.dialog.open(LoginDialogComponent);

      dialogRef.afterClosed().subscribe(result => {
        this.buyProduct();
      });
    } else {
      let tokenInfo = this.getDecodedAccessToken(this.cookieService.get('jwt')); // decode token
      let expireDate = tokenInfo.exp; // get token expiration dateTime
      if (this.tokenExpired(expireDate)) {
        this.cookieService.deleteAll();
        this.checkout();
      } else {
        this.buyProduct();
      }
    }
    this.buyProduct();
    
  }
  buyProduct(){
    this.ds.addItemToCart(this.product.Id).toPromise().then( (res) => {
      console.log(res);
      this.ds.checkout([this.product.Id]).subscribe((res) => {
        console.log(res);
      });
    }).catch(err => console.log(err));
    
  }
  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  private tokenExpired(exp: number) {
    return (Math.floor((new Date).getTime() / 1000)) >= exp;
  }
  // showUserProfile(id:string){
  //   window.scroll(0,0);
  //   this.router.navigate(['user', id]);
  // }
}
