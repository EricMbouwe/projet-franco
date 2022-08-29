import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


const components:any = [];

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
