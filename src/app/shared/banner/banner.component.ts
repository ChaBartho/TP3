import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Location } from '@angular/common';
import { SpotifyService } from '../service/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit{

  token!: string;
  url!: string;
  constructor(private location: Location, private _auth : AuthService, private _spotify : SpotifyService, private _activatedRoute : ActivatedRoute) {}

  ngOnInit(
  ){

  }

  login(){
    window.location.href = this._auth.url
    this._activatedRoute.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      this.token = params['access_token'];
      console.log(this.token); // price
    }
  )
    /*
    this._auth.getToken('f').subscribe((response: any) => {
      const accessToken = response.access_token;
      this._auth.getAccessToken = accessToken;
      localStorage.setItem("token", accessToken);
      console.log(accessToken);
    });*/
  }



  goBack() {
    this.location.back();
  }


}
