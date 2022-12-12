import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:7158/api/TokenWallets';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  
  constructor(private http: HttpClient) { }

  CheckUserLogIn(password : string, name : string): boolean{
    this.http.get(`${API_URL}'?password=${password}&login=${name} `).subscribe((res) => {
      
    });
    return false;
  }
}
