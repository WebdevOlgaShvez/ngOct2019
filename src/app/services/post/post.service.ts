import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) {
  }

  getAllData(): Observable<PostModel[]> {
    console.log(this.httpClient.get<PostModel[]>(this.API + 'posts'));
    return this.httpClient.get<PostModel[]>(this.API + 'posts');

  }
}
