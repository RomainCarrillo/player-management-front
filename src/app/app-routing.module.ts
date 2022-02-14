import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerFormComponentComponent } from './components/player-form-component/player-form-component.component';
import { PlayersListComponentComponent } from './components/players-list-component/players-list-component.component';

const routes: Routes = [
  {path: 'players', component: PlayersListComponentComponent},
  {path: 'addplayer', component: PlayerFormComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
