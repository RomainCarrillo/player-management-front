import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PlayersListComponentComponent } from './components/players-list-component/players-list-component.component';
import { PlayerFormComponentComponent } from './components/player-form-component/player-form-component.component';
import { PlayerServiceService } from './services/player/player-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PositionsListComponentComponent } from './components/positions-list-component/positions-list-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { OpponentListComponent } from './components/opponent-list/opponent-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponentComponent,
    PlayerFormComponentComponent,
    PositionsListComponentComponent,
    OpponentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule
  ],
  providers: [PlayerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
