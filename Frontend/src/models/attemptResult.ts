export class AttemptResult{
  correctColors: number;
  correctPositions: number;


  constructor(correctColors: number, correctPositions: number) {
    this.correctColors = correctColors;
    this.correctPositions = correctPositions;
  }
}
