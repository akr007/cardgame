import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { HeaderComponent } from './header/header.component';
import { GameComponent } from './game/game.component';
import { RulesComponent } from './start/rules/rules.component';
import { HeaderService } from './header/header.service';
import { FormsModule } from '@angular/forms';
import { StartService } from './start/start.service';
import { GameItemComponent } from './game/game-item/game-item.component';
import { Game } from './game/game.model';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HeaderComponent,
    GameComponent,
    RulesComponent,
    GameItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HeaderService, StartService, Game],
  bootstrap: [AppComponent]
})
export class AppModule { }
