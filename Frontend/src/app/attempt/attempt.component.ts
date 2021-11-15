import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.scss']
})
export class AttemptComponent implements OnInit {

  constructor() {
  }

  @Input()
  availableColors!: string[];

  @Output()
  colorSelected: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  selectedColor!: string

  ngOnInit(): void {
  }

  onColorSelected(color: string) {
    this.selectedColor = color;
    this.colorSelected.emit(color);
  }
}
