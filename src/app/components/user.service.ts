import { User } from './user/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

  listar(): Observable<User[]> {
    return this.http.get<User[]>(this.API);
  }
}
