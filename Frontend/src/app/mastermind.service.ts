import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MastermindService {

  constructor() {
  }


  httpRepository: Subject<string> = new Subject<string>();

  public notify(msg: string): void {
    this.httpRepository.next(msg);
  }

  public listen(): Observable<string> {
    return this.httpRepository.asObservable();
  }
}
