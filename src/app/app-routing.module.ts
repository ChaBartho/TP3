import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';

import { PlayerComponent } from './common/player/player.component';


const routes: Routes = [
  {path: 'biblio', loadChildren: () => import('./feature/biblio/biblio.module').then(m => m.BiblioModule)},
  {path: 'playlist', loadChildren: () => import('./feature/playlist/playlist.module').then(m => m.PlaylistModule)},
  {path: 'register', loadChildren: () => import('./feature/register/register.module').then(m => m.RegisterModule)},
  {path: 'search', loadChildren: () => import('./feature/search/search.module').then(m => m.SearchModule)},
  {path: '', component: HomeComponent},
  {path: 'player', component: PlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
