import {AttemptResult} from "./attemptResult";

export class Attempt {
  colors: string[] | undefined;
  attemptResult: AttemptResult | undefined;


  constructor(colors: string[] | undefined, attemptResult: AttemptResult | undefined) {
    this.colors = colors;
    this.attemptResult = attemptResult;
  }
}
