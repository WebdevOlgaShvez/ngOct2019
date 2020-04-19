import {Component, Input, OnInit} from '@angular/core';
// import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../../services/post/post.service";


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: CommentModel;
  post: PostModel;

  constructor(private postService: PostService) {

  }
  navigate(comment: CommentModel) {
    this.postService.getPost(comment.postId).subscribe(value => this.post = value);
  }

  /*constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }*/

  ngOnInit() {
  }
/*
  navigate(comment: CommentModel) {
    this.router.navigate([comment.id],
      {state:{comment},
        queryParams: {idOfComment: comment.id},
        //
        relativeTo:this.activatedRoute})
  }*/
}
