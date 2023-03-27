import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './feature/home/home.component';
import { BannerComponent } from './shared/banner/banner.component';
import { PlayerComponent } from './shared/player/player.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', component: PlayerComponent},
  {path: '', component: BannerComponent},
  {path: 'biblio', loadChildren: () => import('./feature/biblio/biblio.module').then(m => m.BiblioModule)},
  {path: 'playlist', loadChildren: () => import('./feature/playlist/playlist.module').then(m => m.PlaylistModule)},
  {path: 'register', loadChildren: () => import('./feature/register/register.module').then(m => m.RegisterModule)},
  {path: 'search', loadChildren: () => import('./feature/search/search.module').then(m => m.SearchModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
