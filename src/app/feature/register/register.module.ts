import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    SigninComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
