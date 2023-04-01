import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private clientId = '7b02f1ea516d41b3a091cb529d5a142d';
  private clientSecret = '3c2dadbb55b64698a5b548c262c169b4';
  private accessToken!: string;


  constructor(private _http: HttpClient) {}


  login(): void {
    const scopes = 'user-read-private user-read-email';
    const redirectUri = { uri:'https://localhost:4200' };
    const authorizeUrl = 'https://accounts.spotify.com/authorize?client_id=\${this.clientId}&response_type=code&redirect_uri=\${encodeURIComponent(redirectUri.uri)}&scope=\${encodeURIComponent(scopes)}';
    window.location.href = authorizeUrl;
  }


  getAccessToken(): Observable<string> {
    const tokenUrl = 'https://accounts.spotify.com/api/token';
    const headers = new HttpHeaders({
      'Authorization': 'Basic \${btoa(`\${this.clientId}:\${this.clientSecret}`)}',
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = 'grant_type=authorization_code&code=\\${code}&redirect_uri=https://localhost:4200';
    return this._http.post(tokenUrl, body, { headers: headers })
      .pipe(map((response : any) => { this.accessToken = response.access_token;
        return this.accessToken;
      }));
  }


  getToken(code: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(this.clientId + ':' + this.clientSecret)
    });
    const body = new URLSearchParams();
    body.set('code', code);
    body.set('redirect_uri', 'https://localhost:4200');
    body.set('grant_type', 'client_credentials');
    return this._http.post('https://accounts.spotify.com/api/token', body.toString(), { headers });
  }



}
