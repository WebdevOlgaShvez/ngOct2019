import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services/post.service";


@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: PostModel[];

  constructor(private postService: PostService,
              private  activatedRoute: ActivatedRoute,
              /*private router: Router*/) {


// get from resolver
   /* try {
      this.posts = this.activatedRoute.snapshot.data.list;
    } catch (e) {
      console.log(e);
    }*/
    // render post of user
    this.activatedRoute.params  // /users/:id/posts
      .subscribe(value => {
        if (!!value.id) {
          this.postService.getUsersPosts(value.id).subscribe(postsFromServer =>
            this.posts = postsFromServer);
        }
      });


    /* this.activatedRoute.queryParams.subscribe(query =>
        this.postService.getPostOfUserById(query.idOfUser).subscribe(value => console.log(value)));*/

   /* this.postService.getPostOfUserById(this.router.getCurrentNavigation().extras.state.user)
      .subscribe(value => console.log(value));*/
  }


  ngOnInit() {
    this.postService.getAllData().subscribe(value => this.posts = value);
  }

}
