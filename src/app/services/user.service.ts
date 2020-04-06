import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id: number) {
    return this.http.get<UserModel[]>(`https://jsonplaceholder.typicode.com/users/${id}`);

  }

  getAuthUsers() {
    return this.http.get<UserModel[]>(`https://jsonplaceholder.typicode.com/users`);
  }
}
