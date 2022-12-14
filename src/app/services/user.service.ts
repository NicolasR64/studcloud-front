import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentary } from '../models/Commentary';
import { Portefolio } from '../models/Portefolio';
import { PrivateGroup } from '../models/PrivateGroup';
import { PrivateMessage } from '../models/PrivateMessage';
import { Topic } from '../models/Topic';
import { User } from '../models/User';

const API_URL = 'https://localhost:7158/api/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    console.log('triggered: getAllUser()');
    this.http.get(API_URL , { responseType: 'text' }).subscribe();
  }

  getUserById(id: number){
    console.log('triggered: getUserById()');
    this.http.get(API_URL + '/' + id, { responseType: 'text' }).subscribe();
  }

  postUser(formValue : {  Id: number, Name:  string, Firstname: string, Nickname: string, Password: string, Email: string, Phone: string, Birthday: Date|null, Portefolios: Portefolio[]|null, Topics: Topic[]|null, Comments: Commentary[]|null,   PrivateGroups: PrivateGroup[]|null, PrivateMessages: PrivateMessage[]|null }): void {
    const user: User = {
      ...formValue
    };
    console.log('triggered: postUser : ' + user);
    this.http.post<User>(API_URL, user).subscribe();
  }

  UpdateUser(id : number, formValue : {  Id: number, Name:  string, Firstname: string, Nickname: string, Password: string, Email: string, Phone: string, Birthday: Date|null, Portefolios: Portefolio[]|null, Topics: Topic[]|null, Comments: Commentary[]|null,   PrivateGroups: PrivateGroup[]|null, PrivateMessages: PrivateMessage[]|null }): void {
    const user: User = {
      ...formValue
    };
    console.log('triggered: postUser : ' + user);
    this.http.put<User>(API_URL + '/' + id, user).subscribe();;
  }

  DeleteUser(id: number){
    console.log('triggered : deleteUser ');
    this.http.delete(API_URL + '/' + id).subscribe();
  }
}
