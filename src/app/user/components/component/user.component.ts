import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../../post/services/post.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{


  @Input()
  user: UserModel;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService: PostService) {

  }

  navigate(user: UserModel) {
    //users/1/posts
    this.router.navigate([user.id, 'posts'], {
      state: {user},
      queryParams: {idOfUser: user.id},
      relativeTo: this.activatedRoute});
  }

  ngOnInit(){
  }
}
