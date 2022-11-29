import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenWallet } from '../models/TokenWallet';

const API_URL = 'http://localhost:7158/api/TokenWallets';

@Injectable({
  providedIn: 'root'
})
export class TokenWalletService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(API_URL , { responseType: 'text' });
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(API_URL + '/' + id, { responseType: 'text' });
  }

  postUser(tokenWallet : TokenWallet): Observable<any> {
    return this.http.post<TokenWallet>(API_URL, tokenWallet);
  }

  UpdateUser(id: number, tokenWallet : TokenWallet): Observable<any> {
    return this.http.put<TokenWallet>(API_URL + '/' + id, tokenWallet);
  }

  DeleteUser(id: number): Observable<any>{
    return this.http.delete(API_URL + '/' + id);
  }
}
