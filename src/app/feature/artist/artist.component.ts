import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { SpotifyService } from 'src/app/shared/service/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {

constructor(private _spotify : SpotifyService, private _auth : AuthService) {}


  getArtist(){
    //this._spotify.getArtist('4MEbxo5eaEBF0LDKdYNNem',this._auth.getToken ).subscribe((response: any) => {
    this._spotify.getArtist('4MEbxo5eaEBF0LDKdYNNem').subscribe((response: any) => {
      const accessToken = response;
      console.log(response);
    });

  }

}
