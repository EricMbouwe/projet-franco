import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { NavlinkComponent } from './layout/navlink/navlink.component';
import { LoginButtonComponent } from './layout/login-button/login-button.component';


const components:any = [
  HeaderComponent, 
  NavlinkComponent,
  LoginButtonComponent
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
