import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private router: Router, public cookieService :CookieService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  goHome(){
    window.scroll(0,0);
    this.router.navigate(["home"]);
  }
  onToggleSidenav(){
    this.sidenavToggle.emit();
  }
  logout(){
    this.cookieService.deleteAll();
  }
  login(){
      const dialogRef = this.dialog.open(LoginDialogComponent);

      dialogRef.afterClosed().subscribe(result => {
        console.log(result)
      });
  }
}
