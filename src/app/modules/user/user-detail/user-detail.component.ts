import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DummyServiceService } from 'src/app/services/dummy-service.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  isLoading:boolean = true;
  userId:string | null = '';
  orders:any;
  userDetail: User = new User;
  constructor( private router: Router, private route: ActivatedRoute,private ds:DummyServiceService,
    private userService : UserService, public cookieService:CookieService
) { }

  ngOnInit(): void {
    if(this.cookieService.check('jwt')){
      this.getUserDetail();
      this.showUserOrders();
    } else {
      this.isLoading = false;
    }

  }

  getUserDetail(){
    this.userService.getUserProfile().subscribe(resp => {
      const body = resp.body;
      console.log(resp.body)
      this.userDetail = this.userDetail.deserialize(body);
      this.isLoading = false;
      console.log(this.userDetail)
    });
  }

  //convert text to uppercase
  uppercaseLetter(text:string){
    if (!text) return text;
    return text[0].toUpperCase() + text.substr(1).toLowerCase(); 
  }
  showUserOrders(){
    this.ds.getOrderByUserId().subscribe((res)=>{
      this.orders = res.body;
      this.orders.forEach((element:any) => {
        element.Created_Date = element.Created_Date.split(".")[0]
      });
      console.log(this.orders)
    })
  }
}
