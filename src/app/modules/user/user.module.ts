import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { SharedModuleModule } from 'src/app/shared/modules/shared-module/shared-module.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatChipsModule } from '@angular/material/chips';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [ UserDetailComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModuleModule,
    MaterialModule
  ]
})
export class UserModule { }
