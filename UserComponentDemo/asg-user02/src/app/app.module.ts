import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';

import { UserService } from './user/service/user.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { FindUserComponent } from './user/find-user/find-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AddUserComponent,
    FindUserComponent,
    UpdateUserComponent,
    DeleteUserComponent
  ],

  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
