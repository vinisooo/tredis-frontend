import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import LoginType from 'src/app/interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  login(data: LoginType):Observable<any>{
    return this.http.post("http://localhost:3000/login", data);
  }
}
