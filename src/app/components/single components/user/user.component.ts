import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  ngOnInit(){
  }

  @Input()
  user: UserModel;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  navigate(user: UserModel) {
    //users/1/posts
    this.router.navigate([user.id, 'posts'], {relativeTo: this.activatedRoute});
  }
}
