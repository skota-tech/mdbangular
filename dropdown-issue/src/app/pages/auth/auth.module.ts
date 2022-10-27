import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {RouterModule, Routes} from "@angular/router";
import {MDBBootstrapModulesPro} from "ng-uikit-pro-standard";

const routes: Routes = [
  {path: '', component: AuthComponent}
]

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), MDBBootstrapModulesPro
  ]
})
export class AuthModule { }
