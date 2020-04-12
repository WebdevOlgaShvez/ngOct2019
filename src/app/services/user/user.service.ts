import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API = 'https://jsonplaceholder.typicode.com/';
  constructor(private httpClient: HttpClient) {
  }

  getAllData(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(this.API + 'users');

  }
}
