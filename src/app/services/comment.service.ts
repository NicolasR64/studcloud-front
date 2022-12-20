import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentary } from '../models/Commentary';

const API_URL = 'http://localhost:7158/api/Comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getAllComments(): Observable<any> {
    return this.http.get(API_URL , { responseType: 'text' });
  }

  getCommentsById(id: number): Observable<any> {
    return this.http.get(API_URL + '/' + id, { responseType: 'text' });
  }

  postComments(commentary : Commentary): Observable<any> {
    return this.http.post<Commentary>(API_URL, commentary);
  }

  UpdateComments(id: number, commentary : Commentary): Observable<any> {
    return this.http.put<Commentary>(API_URL + '/' + id, commentary);
  }

  DeleteComments(id: number): Observable<any>{
    return this.http.delete(API_URL + '/' + id);
  }
}
