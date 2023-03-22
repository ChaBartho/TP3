import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { PlaylistComponent } from './playlist/playlist.component';

const routes: Routes = [
  {path: 'create', component: CreatePlaylistComponent},
  {path: ':id', component: PlaylistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
