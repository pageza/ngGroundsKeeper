import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogInComponent} from "./auth/log-in/log-in.component";
import {SchoolsListComponent} from "./schools-list/schools-list.component";
import {MainViewComponent} from "./main-view/main-view.component";
import {WorkordersListComponent} from "./workorders-list/workorders-list.component";

const routes: Routes = [
  {path: 'login', component: LogInComponent},
  {path: 'schools', component: SchoolsListComponent, children: [
      {path: ':name', component: MainViewComponent},
    ]},
  {path: 'workorders', component: WorkordersListComponent},
  {path: '', pathMatch: 'full', redirectTo: '/schools'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
