import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/service/auth.service';
import { SpotifyService } from 'src/app/shared/service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  term! : string;
  results! : any[];

  selectedArtist! : string;


  constructor(private _spotify : SpotifyService, private _activatedRoute: ActivatedRoute) { }


  testWonder(){
    this._spotify.searchArtist("wonder").subscribe((response: any) => {
      const accessToken = response;
      console.log(response);
    });
  }


  ngOnInit() {
    this.term = this._activatedRoute.snapshot.params['term'];
    this.search();
  }

  search() {
    this._spotify.searchArtist(this.term).subscribe(
      data => {
        this.results = data['artists']['items'];
      },
      error => {
        console.log(error);
      }
    );
  }







}
