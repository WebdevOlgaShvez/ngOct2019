import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {CommentService} from "../comment/comment.service";

@Injectable({
  providedIn: 'root'
})
export class CommentResolverService implements Resolve<CommentModel[]>{

  constructor(private commentService: CommentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentModel[]> | Promise<CommentModel[]> | CommentModel[] {
    return this.commentService.getAllData();
  }
}
export class CommentsResolverService implements Resolve<CommentModel[]> {

  constructor(private commentService: CommentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentModel[]> {
    const postId = route.queryParamMap.get('postId');
    return this.commentService.getCommentsPosts(postId);
  }


}
