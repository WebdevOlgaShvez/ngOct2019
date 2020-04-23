import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {HelloComponent} from "./hello/hello.component";
import {AppRoutingModule} from "./app-routing.module";
import {UserModule} from "./user/user.module";
import {PostModule} from "./post/post.module";
import {CommentModule} from "./comment/comment.module";



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,

  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
