import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiblioRoutingModule } from './biblio-routing.module';
import { AlbumComponent } from './album/album.component';
import { ArtisteComponent } from './artiste/artiste.component';
import { LikeComponent } from './like/like.component';
import { BiblioComponent } from './biblio/biblio.component';


@NgModule({
  declarations: [
    AlbumComponent,
    ArtisteComponent,
    LikeComponent,
    BiblioComponent
  ],
  imports: [
    CommonModule,
    BiblioRoutingModule
  ]
})
export class BiblioModule { }
