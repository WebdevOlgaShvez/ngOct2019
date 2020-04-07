import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../services/user/user.service';
import {PostService} from '../../services/post/post.service';
import {CommentService} from '../../services/comment/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg = 'users';
  users: UserModel[] = [];


  constructor(private userService: UserService,
              private postService: PostService,
              private commentService: CommentService) {
    this.userService.getUsers().subscribe(users => {

      this.postService.getPosts().subscribe(posts => {
        this.commentService.getComments().subscribe(comments => {


          for (const user of users) {
            user.posts = [];
            for (const post of posts) {
              if (post.userId === user.id) {
                post.comments = [];
                for (const comment of comments) {
                  if (comment.postId === post.id) {
                    post.comments.push(comment);
                  }
                }
                user.posts.push(post);
              }
            }
            this.users.push(user);
          }
          console.log(this.users);


        });
      });


    });


  }


}
