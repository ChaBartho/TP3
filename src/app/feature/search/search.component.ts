import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/shared/service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  name! : string;
  id! : string;
  results! : any[];
  resultsAlbum! : any[];
  artist! : any;
  albums! : any;

  constructor(private _spotify : SpotifyService, private _activatedRoute: ActivatedRoute) { }

  testWonder(){
    this._spotify.searchArtist("wonder").subscribe((response: any) => {
      const accessToken = response;
      console.log(response);
    });
  }

  ngOnInit() {
    this.name = this._activatedRoute.snapshot.params['name'];
    this.id = this._activatedRoute.snapshot.params['id'];

    this._spotify.getArtist(this.id).subscribe(
      data => {
        this.artist = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  searchArtists() {
    this._spotify.searchArtist(this.name).subscribe(
      data => {
        this.results = data['artists']['items'];
      },
      error => {
        console.log(error);
      }
    );
  }

  clickArtist(artistId: string){
    this._spotify.getArtistAlbums(artistId).subscribe((response: any) => {
      const accessToken = response;
      console.log(response);
    });

    this._spotify.getArtistAlbums(artistId).subscribe(
      data => {
        this.resultsAlbum = data['artists'];
      },
      error => {
        console.log(error);
      }
    );
  }



}
