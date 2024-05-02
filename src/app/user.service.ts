import { Injectable } from '@angular/core';
import {User} from "./model/user.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const baseUrl = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  constructor(private http: HttpClient) { }

  loadUser(id: string) {
    this.getUser(id).subscribe(user => {
      this.user = user;
    })
  }

  private getUser(id: string): Observable<User> {
    return this.http.get<User>(`${baseUrl}/${id}`);
  }
}
