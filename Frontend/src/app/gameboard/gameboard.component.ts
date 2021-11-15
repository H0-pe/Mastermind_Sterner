import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../models/game";
import {BackendConnectorService} from "../backend-connector.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AttemptResult} from "../../models/attemptResult";
import {Attempt} from "../../models/attempt";

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent implements OnInit {

  @Input()
  game!: Game;

  attempts: Attempt[] = [];

  availableColors: string[] = []


  wonGame = false;
  lostGame = false;

  colorsGroup: FormGroup = new FormGroup({
    color1: new FormControl(null, Validators.required),
    color2: new FormControl(null, Validators.required),
    color3: new FormControl(null, Validators.required),
    color4: new FormControl(null, Validators.required),
  })

  getColor(colorNr: number) {
    return this.colorsGroup.get(`color${colorNr}`);
  }

  resetAllColors() {
    for (let i = 1; i <= 4; i++) {
      this.getColor(i)?.patchValue(null);
    }
  }

  constructor(private backendConnector: BackendConnectorService) {
  }

  ngOnInit(): void {
    this.backendConnector.getAvailableColors().then(x => this.availableColors = x);
    this.attempts = this.game.attempts;
    this.wonGame = this.attempts.map(x => x.attemptResult).some(x => x?.correctPositions === 4);
    this.lostGame = this.attempts.length === this.game.nrOfTries;
    if (!this.wonGame && !this.lostGame)
      this.attempts.push(new Attempt(undefined, undefined))
  }

  colorSelected(colorNr: number, color: string) {
    this.getColor(colorNr)?.patchValue(color);
  }

  getAllColorsAsString(): string[] {
    const colors = [];
    for (let i = 1; i <= 4; i++) {
      colors.push(this.getColor(i)?.value)
    }
    return colors;
  }

  getColorOfAttempt(attempt: Attempt, index: number): string {
    if (attempt.colors) {
      return attempt.colors[index] ? attempt.colors[index] : '';
    }
    return '';
  }

  submitAttempt(attemptIndex: number) {

    this.backendConnector.submitAttempt(this.game.gameId || '', this.getAllColorsAsString()).then(x => {
      if (x.correctPositions == 4)
        this.wonGame = true;
      else {
        if (this.attempts.length < this.game.nrOfTries - 1)
          this.attempts.push(new Attempt(undefined, undefined))
        else {
          this.lostGame = true;
        }
      }
      this.attempts[attemptIndex].attemptResult = x;
      this.resetAllColors();
    });
  }
}
