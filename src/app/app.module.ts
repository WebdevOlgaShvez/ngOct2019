import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './components/single components/user/user.component';
import { PostComponent } from './components/single components/post/post.component';
import { CommentComponent } from './components/single components/comment/comment.component';
import {RouterModule} from "@angular/router";
import {AllCommentsComponent} from "./components/all-comments/all-comments.component";
import {AllPostsComponent} from "./components/all-posts/all-posts.component";
import {AllUsersComponent} from "./components/all-users/all-users.component";
import {HelloComponent} from "./components/hello/hello.component";
import {UserResolverService} from "./services/resolvers/user-resolver.service";
import {CommentResolverService, CommentsResolverService} from "./services/resolvers/comment-resolver.service";
import {PostResolverService} from "./services/resolvers/post-resolver.service";


const routes = [
  {path: '', component: HelloComponent},
  {path: 'users', component: AllUsersComponent, resolve: {list: UserResolverService },
    children: [
      //users/:id/posts
    {path: ':id/posts', component: AllPostsComponent, children: [
        {path: ':id/comments', component: AllCommentsComponent}]}
    ]},
  {path: 'posts', component: AllPostsComponent, resolve: {list: PostResolverService  },
    children: [
      {path: ':id/comments', component: AllCommentsComponent}] },
  {
    path: 'comments', component: AllCommentsComponent, resolve: {comments: CommentResolverService}, /*children: [
      {path: ':xxx/post', component: PostComponent}]*/
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    AllPostsComponent,
    AllCommentsComponent,
    HelloComponent,
    UserComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
