import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeBonToken {
  tokenValue!:string
  constructor(private http: HttpClient) {}

  getToken(code: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa('7b02f1ea516d41b3a091cb529d5a142d' + ':' + '3c2dadbb55b64698a5b548c262c169b4')
    });

    const body = new URLSearchParams();
    body.set('code', code);
    body.set('redirect_uri', 'https://localhost:4200');
    body.set('grant_type', 'client_credentials');

    return this.http.post('https://accounts.spotify.com/api/token', body.toString(), { headers });
  }
}
