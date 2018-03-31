import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  imports: [ FormsModule ],
  declarations: [ SigninComponent, SignupComponent ],
  providers: []
})
export class AuthModule { }
