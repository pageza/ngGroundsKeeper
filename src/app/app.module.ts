import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LogInComponent } from './auth/log-in/log-in.component';
import { HeaderComponent } from './header/header.component';
import { SchoolsListComponent } from './school/schools-list/schools-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SchoolInfoComponent } from './school/shool-info/school-info.component';
import { WorkordersListComponent } from './workorder/workorders-list/workorders-list.component';
import {MatCardModule} from "@angular/material/card";
import { MainViewComponent } from './school/main-view/main-view.component';
import { AllWorkordersComponent } from './workorder/all-workorders/all-workorders.component';
import { OneSchoolComponent } from './school/one-school/one-school.component';
import { OneWorkorderComponent } from './workorder/one-workorder/one-workorder.component';
import { CreateWorkorderComponent } from './workorder/create-workorder/create-workorder.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HeaderComponent,
    SchoolsListComponent,
    SchoolInfoComponent,
    WorkordersListComponent,
    MainViewComponent,
    AllWorkordersComponent,
    OneSchoolComponent,
    OneWorkorderComponent,
    CreateWorkorderComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        NgbModule,
        MatCardModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
