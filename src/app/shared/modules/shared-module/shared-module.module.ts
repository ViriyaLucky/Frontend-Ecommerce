import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { PostcardComponent } from '../../components/postcard/postcard.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SidenavListComponent } from '../../components/sidenav-list/sidenav-list.component';
import { RouterModule } from '@angular/router';
import { LoginDialogComponent } from '../../components/login-dialog/login-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent, PostcardComponent, LoginDialogComponent, SidenavListComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule ,
    ReactiveFormsModule
  ],
  exports: [ HeaderComponent, PostcardComponent, MaterialModule,FlexLayoutModule, SidenavListComponent,
     RouterModule, LoginDialogComponent],

})
export class SharedModuleModule { }
