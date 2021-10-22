import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModuleModule } from 'src/app/shared/modules/shared-module/shared-module.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModuleModule,
    MaterialModule
  ]
})
export class LoginModule { }
