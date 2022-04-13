import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Opponent } from 'src/app/models/opponent/opponent';

@Injectable({
  providedIn: 'root'
})
export class OpponentServiceService {

  private opponentUrl: string;

  constructor(private http: HttpClient) {
    this.opponentUrl = "http://localhost:8080/opponent";
   }

   public getAllOpponents() :Observable<Opponent[]> {
     return this.http.get<Opponent[]>(this.opponentUrl);
   }

   public addOpponent(opponentToAdd : Opponent) {
    return this.http.post<Opponent>(this.opponentUrl, opponentToAdd);
  }
}
