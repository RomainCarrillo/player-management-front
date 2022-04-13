import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PlayersListComponentComponent } from './features/players/list-component/players-list-component.component';
import { PlayerFormComponentComponent } from './features/players/form-component/player-form-component.component';
import { PlayerServiceService } from './features/players/service/player-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PositionsListComponentComponent } from './components/positions-list-component/positions-list-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { OpponentListComponent } from './components/opponent-list/opponent-list.component';
import { OpponentFormComponent } from './components/opponent-form/opponent-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponentComponent,
    PlayerFormComponentComponent,
    PositionsListComponentComponent,
    OpponentListComponent,
    OpponentFormComponent,
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
