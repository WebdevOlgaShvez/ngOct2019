import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: PostModel;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
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
