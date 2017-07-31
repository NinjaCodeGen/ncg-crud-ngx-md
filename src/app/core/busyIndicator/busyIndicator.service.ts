import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface BusyIndicatorState {
  show: boolean;
}

@Injectable()
export class BusyIndicatorService {
  private busyIndicatorSubject = new Subject<BusyIndicatorState>();

  busyIndicatorState = this.busyIndicatorSubject.asObservable();

  constructor( @Optional() @SkipSelf() prior: BusyIndicatorService) {
    if (prior) { return prior; }
  }

  show() {
    this.busyIndicatorSubject.next(<BusyIndicatorState>{ show: true });
  }

  hide() {
    this.busyIndicatorSubject.next(<BusyIndicatorState>{ show: false });
  }
}

/* NinjaCodeGen.com by DNAfor.NET */
