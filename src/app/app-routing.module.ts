import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailComponent } from './feature/album-detail/album-detail.component';
import { AlbumComponent } from './feature/album/album.component';

import { ArtistComponent } from './feature/artist/artist.component';
import { CreatePlaylistComponent } from './feature/create-playlist/create-playlist.component';
import { HomeComponent } from './feature/home/home.component';
import { LikeComponent } from './feature/like/like.component';
import { SearchComponent } from './feature/search/search.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'artist', component: ArtistComponent},
  {path: 'create-playlist', component: CreatePlaylistComponent},
  {path: 'album', component: AlbumComponent},
  {path: 'like', component: LikeComponent},
  {path: 'search', component: SearchComponent, children : [
    {path: 'album-detail', component: AlbumDetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
