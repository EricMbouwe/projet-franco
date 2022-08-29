import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { NavlinkComponent } from './layout/navlink/navlink.component';
import { LoginButtonComponent } from './layout/login-button/login-button.component';
import { ButtonComponent } from './ui/button/button.component';
import { FormInputComponent } from './ui/form-input/form-input.component';


const components: any = [
  HeaderComponent,
  NavlinkComponent,
  LoginButtonComponent,
  ButtonComponent,
  FormInputComponent
];

const modules = [
  CommonModule,
  RouterModule
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [
    ...components,
    ...modules,
  ]
})
export class SharedModule { }
