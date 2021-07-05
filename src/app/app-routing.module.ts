import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogInComponent} from "./auth/log-in/log-in.component";
import {SchoolsListComponent} from "./school/schools-list/schools-list.component";
import {MainViewComponent} from "./school/main-view/main-view.component";
import {WorkordersListComponent} from "./workorder/workorders-list/workorders-list.component";
import {AllWorkordersComponent} from "./workorder/all-workorders/all-workorders.component";
import {OneSchoolComponent} from "./school/one-school/one-school.component";
import {OneWorkorderComponent} from "./workorder/one-workorder/one-workorder.component";
import {CreateWorkorderComponent} from "./workorder/create-workorder/create-workorder.component";

const routes: Routes = [
  {path: 'login', component: LogInComponent},
  {path: 'schools', component: SchoolsListComponent, children: [
      {path: ':name', component: MainViewComponent},
    ]},
  {path: 'school/:name', component: OneSchoolComponent},
  {path: 'workorders', component: AllWorkordersComponent},
  {path: 'workorders/:school', component: WorkordersListComponent},
  {path: 'workorder/:id', component: OneWorkorderComponent},
  {path: 'workorder/create/:school', component: CreateWorkorderComponent},
  {path: '', pathMatch: 'full', redirectTo: '/schools'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
