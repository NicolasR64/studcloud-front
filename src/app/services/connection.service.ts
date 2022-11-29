import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:7158/api/connectionUser';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  
  constructor(private http: HttpClient) { }

  CheckUserLogIn(password : string, name : string): Observable<any> {
    return this.http.post(API_URL, [name, password]);
  }
}
