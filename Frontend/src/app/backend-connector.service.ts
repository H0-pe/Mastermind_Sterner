import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Game} from "../models/game";
import {AttemptResult} from "../models/attemptResult";

@Injectable({
  providedIn: 'root'
})
export class BackendConnectorService {

  constructor(private http: HttpClient) { }

  private readonly URL = 'http://localhost:5000/api/mastermind/';

  public startNewGame(game: Game): Promise<Game>{
    return this.http.post<Game>(`${this.URL}startNewGame`, game).toPromise();
  }

  public getAvailableColors(): Promise<string[]> {
    return this.http.get<string[]>(`${this.URL}getAvailableColors`).toPromise();
  }

  submitAttempt(gameId: string, colors: string[]): Promise<AttemptResult> {
    return this.http.post<AttemptResult>(`${this.URL}submitAttempt/${gameId}`, colors).toPromise();
  }

  resumeGame(existingGameId: string): Promise<Game> {
    return this.http.get<Game>(`${this.URL}resumeGame/${existingGameId}`).toPromise();
  }
}
