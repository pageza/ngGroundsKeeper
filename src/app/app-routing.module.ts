import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolInfoComponent } from "./shool-info/school-info.component";
import {LogInComponent} from "./auth/log-in/log-in.component";
import {MainViewComponent} from "./main-view/main-view.component";

const routes: Routes = [
  {path: 'login', component: LogInComponent},
  {path: '', component: MainViewComponent, children: [
      {path: ':school', component: SchoolInfoComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
