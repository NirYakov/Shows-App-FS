import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CardShowComponent } from './cards/cardShow/cardShow.component';
import { CardsListComponent } from './cards/cards-list/cards-list.component';
import { ShowsGameHighlowComponent } from './shows-game/shows-game-highlow/shows-game-highlow.component';
import { SingleShowComponent } from './cards/single-show/single-show.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardShowComponent,
    CardsListComponent,
    ShowsGameHighlowComponent,
    SingleShowComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
