import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  create(post: Post): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }
}
