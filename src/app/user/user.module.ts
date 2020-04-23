import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {AllUsersComponent} from "./components/all-users/all-users.component";
// @ts-ignore
import {UserComponent} from "./components/component/user.component";


@NgModule({
  declarations: [
    AllUsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,

  ]
})
export class UserModule { }
