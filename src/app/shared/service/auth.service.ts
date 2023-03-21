import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http : HttpClient) { }

  client_id = '7b02f1ea516d41b3a091cb529d5a142d'
  client_secret = '3c2dadbb55b64698a5b548c262c169b4'

  private encoded = btoa(this.client_id + ':' + this.client_secret);

  url= 'https://accounts.spotify.com/api/token'


public getToken(){
  let params = ('grant_type=client_credentials');
  this._http.post(this.url, params, {headers: new HttpHeaders({
    'Content-Type':'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + this.encoded
  })}).subscribe( res => {this.setSession(res)} )
}


private setSession(authResult:any) {
  localStorage.setItem('token', authResult.access_token);
  console.log(localStorage.getItem("token"))
}




}
