import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  comments: CommentModel[];

  constructor(private commentService: CommentService, private  activatedRoute: ActivatedRoute) {


    try {
      this.comments = this.activatedRoute.snapshot.data.comments;
    } catch (e) {
      console.log(e);
    }

    this.activatedRoute.params
      .subscribe(value => {
        if (!!value.id) {
          this.commentService.getCommentsPosts(value.id).subscribe(comments => {
            this.comments = comments;
          });
        }
      });
  }

  ngOnInit() {
    this.commentService.getAllData().subscribe(value => this.comments = value);
  }
}

