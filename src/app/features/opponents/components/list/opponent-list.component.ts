import { Component, OnInit } from '@angular/core';
import { Opponent } from 'src/app/models/opponent/opponent';
import { OpponentServiceService } from 'src/app/features/opponents/service/opponent-service.service';

@Component({
  selector: 'app-opponent-list',
  templateUrl: './opponent-list.component.html',
  styleUrls: ['./opponent-list.component.css']
})
export class OpponentListComponent implements OnInit {

  opponents: Opponent[];

  constructor(private opponentService: OpponentServiceService) { }

  ngOnInit(): void {
    this.opponentService.getAllOpponents().subscribe(data => {this.opponents = data;})
  }
}
