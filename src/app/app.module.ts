import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';
import { HomeModule } from './modules/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './shared/modules/material/material.module';
import { SharedModuleModule } from './shared/modules/shared-module/shared-module.module';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { ScrollToTopComponent } from './shared/components/scroll-to-top/scroll-to-top.component';
import { LoginComponent } from './modules/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { LoginDialogComponent } from './shared/components/login-dialog/login-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ScrollToTopComponent
  ],providers:[
    CookieService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    UserModule,
    PostModule,
    BrowserAnimationsModule,
    HttpClientModule ,
    MaterialModule,
    SharedModuleModule,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
