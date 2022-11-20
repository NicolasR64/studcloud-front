import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:7158/api/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(API_URL , { responseType: 'text' });
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(API_URL + '/' + id, { responseType: 'text' });
  }

  postUser(user : User): Observable<any> {
    return this.http.post<User>(API_URL, user);
  }

  UpdateUser(id: number, user : User): Observable<any> {
    return this.http.put<User>(API_URL + '/' + id, user);
  }

  DeleteUser(id: number){
    return this.http.delete(API_URL + '/' + id);
  }
}
