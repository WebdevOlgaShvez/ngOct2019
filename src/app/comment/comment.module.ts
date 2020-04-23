import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import {AllCommentsComponent} from "./component/all-comments/all-comments.component";
import {CommentComponent} from "./component/comment/comment.component";


@NgModule({
  declarations: [
    AllCommentsComponent,
    CommentComponent
  ],

  imports: [
    CommonModule,
    CommentRoutingModule
  ]
})
export class CommentModule { }
