import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../../../models/player/player';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {


  private playersUrl: string;


  constructor(private http: HttpClient) {
    this.playersUrl = "http://localhost:8080/players";
   }

   public getAllPlayers() :Observable<Player[]> {
     return this.http.get<Player[]>(this.playersUrl);
   }

   public addPlayer(playerToAdd : Player) {
     
     return this.http.post<Player>(this.playersUrl, playerToAdd);
   }



}
