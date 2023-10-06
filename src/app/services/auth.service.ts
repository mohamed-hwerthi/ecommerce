import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  register(body: any) {
    return this.httpClient.post('http://localhost:6070/client', body);
  }
  login(body: any) {
    return this.httpClient.post('http://localhost:6070/client/SignIn', body);
  }
}
