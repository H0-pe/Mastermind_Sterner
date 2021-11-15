import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MastermindService} from "../mastermind.service";

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss']
})
export class LoggingComponent implements OnInit {

  constructor(private mastermindService: MastermindService) { }

  logMessages: string[] = [];

  @Output()
  closeButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    var myModal = document.getElementById('myModal')
    this.mastermindService.listen().subscribe(x => this.logMessages.push(x));
  }

  onCloseButtonClicked() {
    this.closeButtonClicked.emit();
  }
}
