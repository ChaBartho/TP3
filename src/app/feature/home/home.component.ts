import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/shared/service/auth.service';
import { SpotifyService } from 'src/app/shared/service/spotify.service';
import { LeBonToken } from 'src/app/shared/service/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  token!:string;

  constructor(private location: Location, private _auth : AuthService, private _spotif :SpotifyService, private _letoken :LeBonToken) {}

  ngOnInit(){

  }

  login(){
    console.log("et quoi");
    //Méthode d'authentification: -> trouver comment stocker accessToken ... shared ?

    //this._auth.login();
    this._letoken.getToken('f').subscribe((response: any) => {
      const accessToken = response.access_token;
    this._letoken.tokenValue = accessToken;
      console.log(accessToken);
    });
    console.log("zigouigou");

    //Méthode getArtist :
   this._spotif.getArtist('4MEbxo5eaEBF0LDKdYNNem',this._letoken.tokenValue ).subscribe((response: any) => {
    const accessToken = response;
    console.log(response);
  });
  }






  goBack() {
    this.location.back();
  }


}
