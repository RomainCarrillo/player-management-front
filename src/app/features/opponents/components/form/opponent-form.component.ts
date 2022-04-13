import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Opponent } from 'src/app/models/opponent/opponent';
import { OpponentServiceService } from 'src/app/features/opponents/service/opponent-service.service';

@Component({
  selector: 'app-opponent-form',
  templateUrl: './opponent-form.component.html',
  styleUrls: ['./opponent-form.component.css']
})
export class OpponentFormComponent implements OnInit {

  opponent: Opponent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private opponentService: OpponentServiceService
  ) {
    this.opponent = new Opponent();
  }

  onSubmit() {
    this.opponentService.addOpponent(this.opponent).subscribe(result => this.goToOpponentsList())
  }

  goToOpponentsList() {
    this.router.navigate(['/opponents']);
  }

  ngOnInit(): void {
  }

}
