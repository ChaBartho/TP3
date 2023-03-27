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
  private tokenValue!:string


  constructor(private _http: HttpClient) {}


 login(): void {
    const scopes = 'user-read-private user-read-email';
    const redirectUri = { uri:'https://localhost:4200' };
    const authorizeUrl = 'https://accounts.spotify.com/authorize?client_id=\${this.clientId}&response_type=code&redirect_uri=\${encodeURIComponent(redirectUri.uri)}&scope=\${encodeURIComponent(scopes)}';
    window.location.href = authorizeUrl;
  }


 getAccessToken(code: string): Observable<string> {
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
      Authorization: 'Basic ' + btoa('7b02f1ea516d41b3a091cb529d5a142d' + ':' + '3c2dadbb55b64698a5b548c262c169b4')
    });
    const body = new URLSearchParams();
    body.set('code', code);
    body.set('redirect_uri', 'https://localhost:4200');
    body.set('grant_type', 'client_credentials');
    return this._http.post('https://accounts.spotify.com/api/token', body.toString(), { headers });
  }


  /*
    searchArtists(query: string): Observable<any> {
    const searchUrl = 'https://api.spotify.com/v1/search?q=\\${encodeURIComponent(query)}&type=artist&market=US&limit=10';
    const headers = new HttpHeaders({
      'Authorization': 'Bearer \\${this.accessToken}'
    });
    return this._http.get(searchUrl, { headers: headers })
      .pipe(map((response: any) => {
        return response.artists.items;
      }));
  }


  //INTERCEPTOR POUR STOCKER TOKEN ?

  export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token')
    if(token){
      let clone = request.clone({
        setHeaders : {
          Authorization : "Bearer" + token
        }
      })
      return next.handle(clone)
    }
    return next.handle(request);
  }
}




  */




}
