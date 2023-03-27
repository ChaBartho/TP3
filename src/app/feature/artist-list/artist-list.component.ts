import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/shared/model/spotify';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent {

  artist : Artist = this._activatedRoute.snapshot.data['artist']

  constructor(private _activatedRoute : ActivatedRoute) { }



}
