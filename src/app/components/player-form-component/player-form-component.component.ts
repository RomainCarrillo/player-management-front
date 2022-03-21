import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/models/player/player';
import { PlayerServiceService } from 'src/app/services/player/player-service.service';
import { FormsModule }   from '@angular/forms';


@Component({
  selector: 'app-player-form-component',
  templateUrl: './player-form-component.component.html',
  styleUrls: ['./player-form-component.component.css']
})
export class PlayerFormComponentComponent implements OnInit {

  player: Player;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerServiceService
  ) {
    this.player = new Player();
  }

  onSubmit() {
    this.playerService.addPlayer(this.player).subscribe(result => this.goToPlayersList());

  }

  goToPlayersList() {
    this.router.navigate(['/players']);
  }

  ngOnInit(): void {
  }

}
