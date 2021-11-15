import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Game} from "../models/game";
import {BackendConnectorService} from "./backend-connector.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mastermind-frontend-sterner';

  game: Game | undefined
  showLoggingDialog: boolean = false;
  existingGameId: string = '';


  constructor(private backendConnector: BackendConnectorService) {
  }


  resumeGame(): void{
    this.backendConnector.resumeGame(this.existingGameId).then(x => this.game = x);
  }


  startNewGame(game: Game): void {
    this.game = game;
    this.backendConnector.startNewGame(game).then(x => {
      this.game = x
    });
  }

  resetGame(): void {
    this.game = undefined;
  }
}
