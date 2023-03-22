import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { album, artist, player, playlist } from '../model/spotify';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private _http: HttpClient) { }

  getArtist(id: string | null) : Observable <artist> {
    return this._http.get<artist>("https://api.spotify.com/v1/artists/id" + id)
  }

  getAlbum(id: string | null) : Observable <album> {
    return this._http.get<album>("https://api.spotify.com/v1/albums/id" + id)
  }

  getPlaylist(id: string | null) : Observable <playlist> {
    return this._http.get<playlist>("https://api.spotify.com/v1/playlists/playlist_id" + id)
  }

  getPlayer(id: string | null) : Observable <player> {
    return this._http.get<player>("https://api.spotify.com/v1/me/player/currently-playing" + id)
  }




}
