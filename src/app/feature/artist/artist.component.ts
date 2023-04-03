import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/shared/model/spotify';
import { SpotifyService } from 'src/app/shared/service/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  public topArtists!: any[];

  constructor(private _spotify : SpotifyService) { }

  ngOnInit(): void {
    this.getTopArtists();
  }

  getTopArtists(): void {
    this._spotify.getTopArtists().subscribe(
      (response: any) => {
        this.topArtists = response.items;
        console.log(this.topArtists);

      },
      (error: any) => {
        console.log(error);
      }
    );
  }







/*
//recherche d'un artiste en dur:
  getArtists(){
    this._spotify.getArtist('4MEbxo5eaEBF0LDKdYNNem').subscribe((response: any) => {
      const accessToken = response;
      console.log(response);
    });
  }
*/




}
