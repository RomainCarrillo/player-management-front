import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpponentFormComponent } from './features/opponents/components/form/opponent-form.component';
import { OpponentListComponent } from './features/opponents/components/list/opponent-list.component';
import { PlayerFormComponentComponent } from './features/players/components/form/player-form-component.component';
import { PlayersListComponentComponent } from './features/players/components/list/players-list-component.component';
import { PositionsListComponentComponent } from './features/positions/components/list/positions-list-component.component';

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
