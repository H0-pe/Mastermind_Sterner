import {Attempt} from "./attempt";

export class Game{
  name: string;
  nrOfTries: number;
  gameId: string | undefined;
  attempts: Attempt[];


  constructor(name: string, nrOfTries: number, gameId: string | undefined, attempts: Attempt[] = []) {
    this.name = name;
    this.nrOfTries = nrOfTries;
    this.gameId = gameId;
    this.attempts = attempts;
  }
}
