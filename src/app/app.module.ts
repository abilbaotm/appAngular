import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routes';
import { HeroesComponent } from './components/heroes/heroes.component';
import {HeroesService} from './servicios/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutes
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
