import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpponentListComponent } from './components/opponent-list/opponent-list.component';
import { PlayerFormComponentComponent } from './components/player-form-component/player-form-component.component';
import { PlayersListComponentComponent } from './components/players-list-component/players-list-component.component';
import { PositionsListComponentComponent } from './components/positions-list-component/positions-list-component.component';

const routes: Routes = [
  {path: 'players', component: PlayersListComponentComponent},
  {path: 'addplayer', component: PlayerFormComponentComponent},
  {path: 'all-positions', component: PositionsListComponentComponent},
  {path: 'all-opponents', component: OpponentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
