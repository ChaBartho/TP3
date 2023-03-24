import { query } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
/*

  client_id = '7b02f1ea516d41b3a091cb529d5a142d';
  client_secret = '3c2dadbb55b64698a5b548c262c169b4';
  private encoded = btoa(this.client_id + ':' + this.client_secret);
  url= 'https://accounts.spotify.com/api/token';
  redirect_uri = 'http://localhost:4200'


  constructor(private _http : HttpClient) { }

  public getToken(){
    let params = ('grant_type=client_credentials');
    this._http.post(this.url, params, {headers: new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + this.encoded
    })}).subscribe( res => {this.connect(res)} )
  }


  private connect(authResult:any) {
    localStorage.setItem('token', authResult.access_token);
    console.log(localStorage.getItem("token"))
  }


*/

  private clientId = '7b02f1ea516d41b3a091cb529d5a142d';
  private clientSecret = '3c2dadbb55b64698a5b548c262c169b4';
  private accessToken!: string;
  //private encoded = btoa(this.clientId + ':' + this.clientSecret);

  constructor(private http: HttpClient) {}

  public login(): void {
    const scopes = 'user-read-private user-read-email';
    const redirectUri = { uri:'https://localhost:4200' };
    const authorizeUrl = 'https://accounts.spotify.com/authorize?client_id=\${this.clientId}&response_type=code&redirect_uri=\${encodeURIComponent(redirectUri.uri)}&scope=\${encodeURIComponent(scopes)}';
    console.log("salut");

    window.location.href = authorizeUrl;
    console.log("yasqueen");

  }



  public getAccessToken(code: string): Observable<string> {
    const tokenUrl = 'https://accounts.spotify.com/api/token';
    const headers = new HttpHeaders({

      'Authorization': 'Basic \${btoa(`\${this.clientId}:\${this.clientSecret}`)}',

      //'Authorization': 'Basic' + this.encoded,
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = 'grant_type=authorization_code&code=\\${code}&redirect_uri=https://localhost:4200';
    console.log("coucou");

    return this.http.post(tokenUrl, body, { headers: headers })
      .pipe(map((response : any) => { this.accessToken = response.access_token;
        return this.accessToken;
      }));
  }



  public searchArtists(query: string): Observable<any> {
    const searchUrl = 'https://api.spotify.com/v1/search?q=\\${encodeURIComponent(query)}&type=artist&market=US&limit=10';
    const headers = new HttpHeaders({
      'Authorization': 'Bearer \\${this.accessToken}'
    });
    return this.http.get(searchUrl, { headers: headers })
      .pipe(map((response: any) => {
        return response.artists.items;
      }));
  }




}
