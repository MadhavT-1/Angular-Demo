import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './user/add-user/add-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { FindUserComponent } from './user/find-user/find-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  {path : '', redirectTo : 'alluser', pathMatch : 'full'},
  {path : 'alluser', component : UserListComponent},
  {path : 'adduser', component : AddUserComponent},
  {path : 'finduser', component : FindUserComponent},
  {path : 'updateuser', component : UpdateUserComponent},
  {path : 'deleteuser', component : DeleteUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
