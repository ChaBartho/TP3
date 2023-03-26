import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, Artist, Player, Playlist, User } from '../model/spotify';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private url1 = 'https://api.spotify.com/v1'

  private httpOptions = {
    headers : new HttpHeaders({
      'Authorization': 'Bearer' + 'MYTOKEN'
    })
  }

  constructor(private _http: HttpClient) { }


  getArtist(id: string, accessToken:string) : Observable<Artist> {

    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`
    });



    const url = 'https://api.spotify.com/v1/artists/' + id;
    //const headers = new HttpHeaders().set('Authorization', accessToken);

    return this._http.get<Artist>(url, { headers });
  }






  getAlbum(id: string | null) : Observable <Album> {
    return this._http.get<Album>("https://api.spotify.com/v1/albums/" + id)
  }

  getPlaylist(id: string | null) : Observable <Playlist> {
    return this._http.get<Playlist>("https://api.spotify.com/v1/playlists/" + id)
  }

  getPlayer(id: string | null) : Observable <Player> {
    return this._http.get<Player>("https://api.spotify.com/v1/me/player/currently-playing/" + id)
  }

  getMe(): Observable <User> {
    return this._http.get<User>("https://api.spotify.com/v1/me")
  }





}

