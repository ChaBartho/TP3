import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './feature/home/home.component';
import { PlayerComponent } from './shared/player/player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './shared/banner/banner.component';
import { AlbumComponent } from './feature/album/album.component';
import { ArtistComponent } from './feature/artist/artist.component';
import { CreatePlaylistComponent } from './feature/create-playlist/create-playlist.component';
import { LikeComponent } from './feature/like/like.component';
import { SearchComponent } from './feature/search/search.component';
import { AlbumDetailComponent } from './feature/album-detail/album-detail.component';
import { ReadArtistComponent } from './feature/read-artist/read-artist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerComponent,
    BannerComponent,
    AlbumComponent,
    ArtistComponent,
    CreatePlaylistComponent,
    LikeComponent,
    SearchComponent,
    AlbumDetailComponent,
    ReadArtistComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
