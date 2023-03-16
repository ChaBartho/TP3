import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist/playlist.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';


@NgModule({
  declarations: [
    PlaylistComponent,
    CreatePlaylistComponent
  ],
  imports: [
    CommonModule,
    PlaylistRoutingModule
  ]
})
export class PlaylistModule { }
