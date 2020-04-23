import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllPostsComponent} from "./component/all-posts/all-posts.component";
import {AllCommentsComponent} from "../comment/component/all-comments/all-comments.component";
import {PostResolverService} from "./services/post-resolver.service";


const routes: Routes = [
  // F App - /posts
  // F User - /users
  {path: '', component: AllPostsComponent,
    children: [
      {
        path: ':id', loadChildren: () => import('../comment/comment.module').then(m => m.CommentModule)
      }
      ]
  },
  // F User - /users/10/posts
  {
    path: 'posts', component: AllPostsComponent,
    //resolve: {list: PostResolverService},
    children: [
      {
        path: ':id', loadChildren: () => import('../comment/comment.module').then(m => m.CommentModule)
      }]
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
