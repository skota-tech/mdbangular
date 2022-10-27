import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {MDBBootstrapModulesPro} from "ng-uikit-pro-standard";

const routes: Routes = [
  {path: '', component: DashboardComponent}
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), MDBBootstrapModulesPro
  ]
})
export class DashboardModule { }
