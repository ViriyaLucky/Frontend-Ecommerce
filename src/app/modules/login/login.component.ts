import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user ?: User
  constructor(private cookies: CookieService) { }
  ngOnInit() {
    
  }

  signOut(): void {
    this.cookies.deleteAll();
    window.location.reload();
  }

}