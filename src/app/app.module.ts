import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { HeaderComponent } from './header/header.component';
import { GameComponent } from './game/game.component';
import { RulesComponent } from './start/rules/rules.component';
import { HeaderService } from './header/header.service';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HeaderComponent,
    GameComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
