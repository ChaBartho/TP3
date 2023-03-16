import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { ArtisteComponent } from './artiste/artiste.component';
import { BiblioComponent } from './biblio/biblio.component';
import { LikeComponent } from './like/like.component';

const routes: Routes = [
  {path: '', component: BiblioComponent, children : [
    {path: 'album', component: AlbumComponent},
    {path: 'artiste', component: ArtisteComponent},
    {path: 'like', component: LikeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiblioRoutingModule { }
