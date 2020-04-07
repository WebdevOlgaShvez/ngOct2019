import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  constructor(private http: HttpClient) {
  }

  getComments(): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>('https://jsonplaceholder.typicode.com/comments');
  }

}
