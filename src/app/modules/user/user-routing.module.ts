import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'profile'

   },
  {
    path: 'profile',
    component: UserDetailComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
