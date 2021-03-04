import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const Auth_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders ({'content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(Auth_API + 'signin',{
       username: credentials.username,
       password: credentials.password
    }, httpOptions);
  }

register(user): Observable<any> {
  return this.http.post(Auth_API + 'signup',{
    username: user.username,
    email: user.email,
    password: user.password
  }, httpOptions);
}




}
