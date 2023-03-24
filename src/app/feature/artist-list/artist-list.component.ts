import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/shared/model/spotify';
import { SpotifyService } from 'src/app/shared/service/spotify.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  artists!: Artist;

  constructor(private _spotify: SpotifyService) { }

  ngOnInit() {
   /* this._spotify.getArtist(this.artists.id).subscribe(
      (artists: Artist) => {
        this.artists = artists;
      },
      (error: any) => {
        console.log(error);
      }
    );*/
  }

}
