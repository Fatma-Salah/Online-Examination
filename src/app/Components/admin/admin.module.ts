import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetExamComponent } from './set-exam/set-exam.component';
import { RouterModule, Routes } from '@angular/router';
import { authAdminGuard } from 'src/app/Guards/auth-admin.guard';
import { MainAdminPageComponent } from './main-admin-page/main-admin-page.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';


const routes: Routes =[
  {path:'', redirectTo: '/Admin/home', pathMatch:'full'},
  {path:'exam', component: SetExamComponent,canActivate:[authAdminGuard]},
  {path:'home', component: MainAdminPageComponent,canActivate:[authAdminGuard]},
  {path:'profile', component: ProfileAdminComponent,canActivate:[authAdminGuard]},

]
@NgModule({
  declarations: [
    SetExamComponent,
    MainAdminPageComponent,
    ProfileAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class AdminModule { }
