import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private clientId = environment.spotify.clientId
  private redirect_uri = environment.spotify.redirect_uri;
  state : string =  generateRandomString(16);
  scope: string = environment.spotify.scope
  url : string = environment.spotify.url
                  + '?response_type=token'
                  +'&client_id=' + encodeURIComponent(this.clientId)
                  +'&scope=' + encodeURIComponent(this.scope)
                  + '&redirect_uri=' + encodeURIComponent(this.redirect_uri)
                  + '&state=' + encodeURIComponent(this.state)
                  + 'show_dialog';

  login():void{
    this.url += '?response_type=token';
    this.url += '&client_id=' + encodeURIComponent(this.clientId);
    this.url += '&scope=' + encodeURIComponent(this.scope);
    this.url += '&redirect_uri=' + encodeURIComponent(this.redirect_uri);
    this.url += '&state=' + encodeURIComponent(this.state)
    this.url += 'show_dialog'
  }
}


function generateRandomString(length: number): string {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
}


/*
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
*/
