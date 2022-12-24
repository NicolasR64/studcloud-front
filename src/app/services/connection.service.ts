import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';

const API_URL = 'http://localhost:7158/api/TokenWallets';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  // only for production
  isLoggedIn: boolean = false;
  
  constructor(private http: HttpClient) { }

  CheckUserLogIn(password : string, name : string): Observable<boolean>{
    this.http.get(`${API_URL}'?password=${password}&login=${name} `).subscribe((res) => {
      this.isLoggedIn = false;
    });
    return of(false);
  }

  Logout(){
    this.isLoggedIn = false;
  }
}
