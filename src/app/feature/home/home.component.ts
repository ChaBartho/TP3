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
  accesstoken2!:string
  constructor(private location: Location, private _auth : AuthService, private _spotif :SpotifyService, private _letoken :LeBonToken) {}

  ngOnInit(){
    console.log("et quoi");

    //this._auth.login();
    this._letoken.getToken('f').subscribe((response: any) => {
      const accessToken = response.access_token;
      this.accesstoken2 = accessToken;
      console.log(accessToken);
    });
    console.log("zigouigou");

   this._spotif.getArtist('2up3OPMp9Tb4dAKM2erWXQ', this.accesstoken2 ).subscribe((response: any) => {
    const accessToken = response;
    console.log(response);
  });
  }

  goBack() {
    this.location.back();
  }


}
