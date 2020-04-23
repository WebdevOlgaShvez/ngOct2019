import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input()
  post: PostModel;


  constructor( private router: Router, private activatedRoute: ActivatedRoute, private postService: PostService) {
  }

  navigate(post: PostModel) {
    //posts/1/comments?
    this.router.navigate([post.id, 'comments'],
      {
        state: {post},
        queryParams: {idOfPost: post.id},
        //posts/:id/comments?
        relativeTo: this.activatedRoute
       })
  }

}
