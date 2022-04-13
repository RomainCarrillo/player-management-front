import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Position } from '../../../models/position/position';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionServiceService {

  private positionUrl: string;

  constructor(private http: HttpClient) {
    this.positionUrl = "http://localhost:8080/positions";
  }

  public getAllPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(this.positionUrl);
  }
}
