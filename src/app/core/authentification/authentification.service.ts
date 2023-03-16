import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private _http : HttpClient) { }

  client_id = '7b02f1ea516d41b3a091cb529d5a142d'
  client_secret = '3c2dadbb55b64698a5b548c262c169b4'

  authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  body: {
    'grant_type': 'client_credentials'
  },
  json: true
};
public getToken(){
  return this._http.post(this.authOptions.url, {
    "grant_type": "client_credentials"
  }, {headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization': 'Basic ' + this.client_id + ':' + this.client_secret
  })}).subscribe(res => console.log(res))
}




}
