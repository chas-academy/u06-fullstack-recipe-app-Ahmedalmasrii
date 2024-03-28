import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/Login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(loginObj:Login) {
    if (!loginObj) return
    console.log(loginObj);
    return this.http.post<any>('http://127.0.0.1:8000/api/login', loginObj)
  }

  registerUser(userData: any): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/register';
    return this.http.post(url, userData);
  }
}
