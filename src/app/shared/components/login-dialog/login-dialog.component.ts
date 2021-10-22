import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  loginError = false
  constructor(    private formBuilder: FormBuilder, public userService: UserService,
    public cookieService: CookieService,  public dialogRef: MatDialogRef<LoginDialogComponent> ) { }
  form = this.formBuilder.group({
    "username": new FormControl('', [Validators.required]),
    "password": new FormControl('', [Validators.required])
  });
  ngOnInit(): void {
  }
  onSubmit():void{
    console.log(this.form)
    const formData = new FormData();
    formData.append('username', this.form.get('username')?.value)
    formData.append('password', this.form.get('password')?.value)
    this.userService.login(formData).subscribe((res) => {
      if (res?.error){
        this.loginError = true;
      } else {
        this.loginError = false;
        this.cookieService.set('jwt', res?.token)
        this.dialogRef.close("success");
      }
    })
  }
  getErrorMessage() {
    if (this.form.get('username')?.hasError('required') || this.form.get('password')?.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.loginError){
      return 'Wrong username or password';
    }
    return ""
  }
}
