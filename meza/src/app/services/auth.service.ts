import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {

    const url = 'http://127.0.0.1:8000/api/register';
    return this.http.post(url, userData);
  }
}