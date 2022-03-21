import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player/player';
import { Position } from 'src/app/models/position/position';
import { PlayerServiceService } from 'src/app/services/player/player-service.service';
import { PositionServiceService } from 'src/app/services/position/position-service.service';

@Component({
  selector: 'app-positions-list-component',
  templateUrl: './positions-list-component.component.html',
  styleUrls: ['./positions-list-component.component.css']
})
export class PositionsListComponentComponent implements OnInit {

  positions: Position[];
  players: Player[];

  constructor(private positionService: PositionServiceService, private playerService: PlayerServiceService) {}

  ngOnInit(): void {
    this.positionService.getAllPositions().subscribe(data => {this.positions = data;});
    this.playerService.getAllPlayers().subscribe(data => {this.players = data;});
  }
}