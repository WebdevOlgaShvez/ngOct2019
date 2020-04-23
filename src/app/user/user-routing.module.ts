import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from "./components/all-users/all-users.component";
import {UserResolverService} from "./services/user-resolver.service";
import {AllPostsComponent} from "../post/component/all-posts/all-posts.component";
import {AllCommentsComponent} from "../comment/component/all-comments/all-comments.component";


const routes: Routes = [
  //users
  {path: '', component: AllUsersComponent, resolve: {list: UserResolverService },
 children: [
  //users/100/posts
  {path: ':id',
    loadChildren: () => import('../post/post.module').then(m =>m.PostModule)
  }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
