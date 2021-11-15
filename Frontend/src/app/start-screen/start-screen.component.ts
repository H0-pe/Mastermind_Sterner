import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Game} from "../../models/game";

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  formGroup!: FormGroup;

  @Output()
  startNewGame: EventEmitter<Game> = new EventEmitter<Game>();

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      nameInput: new FormControl('',[Validators.required]),
      triesInput: new FormControl(null,[Validators.required,
        Validators.min(6),
        Validators.max(12)])
    })
  }

  onStartButtonClicked(): void {
      this.startNewGame.emit(new Game(this.formGroup.get('nameInput')?.value, this.formGroup.get('triesInput')?.value, undefined));
  }
}
