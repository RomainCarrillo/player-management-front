import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PlayersListComponentComponent } from './features/players/components/list/players-list-component.component';
import { PlayerFormComponentComponent } from './features/players/components/form/player-form-component.component';
import { PlayerServiceService } from './features/players/service/player-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PositionsListComponentComponent } from './features/positions/components/list/positions-list-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { OpponentListComponent } from './features/opponents/components/list/opponent-list.component';
import { OpponentFormComponent } from './features/opponents/components/form/opponent-form.component';
import { LeftNavbarComponent } from './theme-elements/left-side-navbar/left-navbar/left-navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

//https://www.youtube.com/watch?v=4CYuOiRHHA8

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponentComponent,
    PlayerFormComponentComponent,
    PositionsListComponentComponent,
    OpponentListComponent,
    OpponentFormComponent,
    LeftNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [PlayerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
