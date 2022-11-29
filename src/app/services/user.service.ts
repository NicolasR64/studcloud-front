import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentary } from '../models/Commentary';
import { Portefolio } from '../models/Portefolio';
import { PrivateGroup } from '../models/PrivateGroup';
import { PrivateMessage } from '../models/PrivateMessage';
import { Topic } from '../models/Topic';
import { User } from '../models/User';

const API_URL = 'https://localhost:7238/api/Users';

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

  postUser(formValue : {  Id: number, Name:  string, Firstname: string, Nickname: string, Password: string, Email: string, Phone: string, Birthday: Date|null, Portefolios: Portefolio[]|null, Topics: Topic[]|null, Comments: Commentary[]|null,   PrivateGroups: PrivateGroup[]|null, PrivateMessages: PrivateMessage[]|null }): void {
    const user: User = {
      ...formValue
    };
    console.log('post user : ' + user);
    this.http.post<User>(API_URL, user).subscribe();
  }

  UpdateUser(id: number, user : User): Observable<any> {
    return this.http.put<User>(API_URL + '/' + id, user);
  }

  DeleteUser(id: number): Observable<any>{
    return this.http.delete(API_URL + '/' + id);
  }
}
