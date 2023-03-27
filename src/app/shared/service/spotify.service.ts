import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, Artist, Player, Playlist } from '../model/spotify';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private headers = new HttpHeaders({
    Authorization: `Bearer ${this._auth.getAccessToken('token')}`
  })

  constructor(private _http: HttpClient, private _auth : AuthService) { }


  getArtist(id: string) : Observable<Artist> {
    const url = 'https://api.spotify.com/v1/artists/' + id
    return this._http.get<Artist>(url, { headers: this.headers } )
  }

  getAlbum(id: string) : Observable <Album> {
    const url = 'https://api.spotify.com/v1/albums/' + id
    return this._http.get<Album>(url,  { headers: this.headers })
  }

  getPlaylist(id: string) : Observable <Playlist> {
    const url = 'https://api.spotify.com/v1/playlists/' + id
    return this._http.get<Playlist>(url,  { headers: this.headers })
  }

  getPlayer(id: string) : Observable <Player> {
    const url = 'https://api.spotify.com/v1/me/player/currently-playing/' + id
    return this._http.get<Player>(url,  { headers: this.headers })
  }



    /*
  //Méthode getArtist :
   this._spotify.getArtist('4MEbxo5eaEBF0LDKdYNNem',this._auth.getToken ).subscribe((response: any) => {
    const accessToken = response;
    console.log(response);
  });
  */

}

