import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface Notification {
  message: string;
}

@Injectable()
export class NotifierService {
  private notifierSubject = new Subject<Notification>();

  notifierState = this.notifierSubject.asObservable();

  constructor( @Optional() @SkipSelf() prior: NotifierService) {
    if (prior) {
      console.log('notifier service already exists');
      return prior;
    } else {
    }
  }

  notify(message?: string) {
    this.notifierSubject.next(<Notification>{ message: message });
  }
}

/* NinjaCodeGen.com by DNAfor.NET */
