import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/shared/service/auth.service';
import { SpotifyService } from 'src/app/shared/service/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/shared/model/spotify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  token!: string;

  constructor(private location: Location, private _auth : AuthService, private _spotify :SpotifyService) {}

  ngOnInit(){
  }

  login(){
    //this._auth.login();
    this._auth.getToken('f').subscribe((response: any) => {
      const accessToken = response.access_token;
      this._auth.getAccessToken = accessToken;
      console.log(accessToken);
    });
    console.log("hellooooooooo");

    //Méthode getArtist :
   this._spotify.getArtist('4MEbxo5eaEBF0LDKdYNNem').subscribe((response: any) => {
    const accessToken = response;
    console.log(response);
    });
  }

  goBack() {
    this.location.back();
  }





}
