import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { SigninRoutingModule } from './signin.routing';
import { AuthService } from './signin.service';

@NgModule({
  imports: [
    CommonModule,
    SigninRoutingModule
  ],
  declarations: [SigninComponent]
})
export class SigninModule { }
