import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { SharedModule } from 'shared/shared.module';

import { EditUserComponent } from './components/edit-user/edit-user.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UserComponent } from './components/user/user.component';
import { AuthService } from './services/auth.service';


const userRoutes:Routes = [


  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },

  {
    path:'reset-password',
    component:ResetPasswordComponent
  },
  
  {
    path:'user/:id',
    component:UserComponent,
    canActivate: [AuthGuard],
  },

  
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    
    RouterModule.forChild(userRoutes),
  ],
  declarations: [
    LoginComponent,
    ResetPasswordComponent,
    RegisterComponent,
    UserComponent,
    EditUserComponent,
  ],
  providers:[
    AuthService,

  ]
})
export class UsersModule { }
