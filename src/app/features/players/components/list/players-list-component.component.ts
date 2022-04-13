import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from 'src/app/features/players/service/player-service.service';
import { Player } from 'src/app/models/player/player';

@Component({
  selector: 'app-players-list-component',
  templateUrl: './players-list-component.component.html',
  styleUrls: ['./players-list-component.component.css']
})
export class PlayersListComponentComponent implements OnInit {

  players: Player[];

  constructor(private playerService: PlayerServiceService) {}

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe(data => {this.players = data;})
  }
}
