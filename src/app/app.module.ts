import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './feature/home/home.component';
import { PlayerComponent } from './shared/player/player.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './shared/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
