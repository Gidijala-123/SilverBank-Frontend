import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactServiceService {
  public api = 'http://localhost:1212';
  constructor(private http: HttpClient) {}
  postmethod(data: any, url: string): Observable<any> {
    return this.http.post(this.api + url, data);
  }
}
