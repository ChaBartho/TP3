import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Location } from '@angular/common';
import { SpotifyService } from '../service/spotify.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit{

  token!: string;

  constructor(private location: Location, private _auth : AuthService, private _spotify : SpotifyService) {}

  ngOnInit(){}

  login(){
    this._auth.getToken('f').subscribe((response: any) => {
      const accessToken = response.access_token;
      this._auth.getAccessToken = accessToken;
      localStorage.setItem("token", accessToken);
      console.log(accessToken);
    });
  }



  goBack() {
    this.location.back();
  }


}
