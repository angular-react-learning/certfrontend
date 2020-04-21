import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgForm } from "@angular/forms"

import { RegisterComponent } from "./users/register/register.component"

const routes: Routes = [{
   path : "users/register", component : RegisterComponent 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
