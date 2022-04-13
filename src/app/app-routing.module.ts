import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpponentFormComponent } from './components/opponent-form/opponent-form.component';
import { OpponentListComponent } from './components/opponent-list/opponent-list.component';
import { PlayerFormComponentComponent } from './features/players/form-component/player-form-component.component';
import { PlayersListComponentComponent } from './features/players/list-component/players-list-component.component';
import { PositionsListComponentComponent } from './components/positions-list-component/positions-list-component.component';

const routes: Routes = [
  {path: 'players', component: PlayersListComponentComponent},
  {path: 'add-player', component: PlayerFormComponentComponent},
  {path: 'positions', component: PositionsListComponentComponent},
  {path: 'opponents', component: OpponentListComponent},
  {path: 'add-opponent', component: OpponentFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
