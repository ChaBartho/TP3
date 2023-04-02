import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, Artist, Player, Playlist } from '../model/spotify';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private headers! : HttpHeaders

  constructor(private _http: HttpClient) { }

  buildHeaders(){
    this.headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("token")}`
    })
  }

  //récupérer un artist via son id:
  getArtist(id: string) : Observable<Artist> {
    this.buildHeaders();
    console.log(this.headers);
    const url = 'https://api.spotify.com/v1/artists/' + id
    return this._http.get<Artist>(url, { headers: this.headers } )
  }

  getAlbum(id: string) : Observable <Album> {
    this.buildHeaders();
    console.log(this.headers);
    const url = 'https://api.spotify.com/v1/albums/' + id
    return this._http.get<Album>(url, { headers: this.headers })
  }

  getPlaylist(id: string) : Observable <Playlist> {
    this.buildHeaders();
    console.log(this.headers);
    const url = 'https://api.spotify.com/v1/playlists/' + id
    return this._http.get<Playlist>(url, { headers: this.headers })
  }

  getPlayer(id: string) : Observable <Player> {
    this.buildHeaders();
    console.log(this.headers);
    const url = 'https://api.spotify.com/v1/me/player/currently-playing/' + id
    return this._http.get<Player>(url, { headers: this.headers })
  }

  //recherche artist via le champ de recherche avec un nom:
  searchArtist(nom: string) : Observable <any> {
    this.buildHeaders();
    console.log(this.headers);
    const url = `https://api.spotify.com/v1/search?q=${nom}&type=artist`;
    return this._http.get(url, { headers : this.headers });
  }

  getArtistAlbums(id: string): Observable <any>{
    this.buildHeaders();
    console.log(this.headers);
    const url = `https://api.spotify.com/v1/artists/${id}/albums`;
    return this._http.get<Album>(url, { headers: this.headers })
  }

}

