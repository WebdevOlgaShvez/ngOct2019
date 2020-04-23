import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HelloComponent} from "./hello/hello.component";


const routes = [
  {path: '', component: HelloComponent},
  {path: 'users', loadChildren: () => import('./user/user.module').then(m =>m.UserModule)
  },
  {path: 'posts', loadChildren: () => import('./post/post.module').then(m =>m.PostModule)
  },
  {path: 'comments', loadChildren: () => import('./comment/comment.module').then(m =>m.CommentModule)
  },


 /* {path: 'posts', component: AllPostsComponent, resolve: {list: PostResolverService  },
    children: [
      {path: ':id/comments', component: AllCommentsComponent}] },
  {
    path: 'comments', component: AllCommentsComponent, resolve: {comments: CommentResolverService}, /!*children: [
      {path: ':xxx/post', component: PostComponent}]*!/
  }*/
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
