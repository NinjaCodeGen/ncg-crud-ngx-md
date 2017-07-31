import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { NotifierService } from './notifier/notifier.service';

@Injectable()
export class ExceptionService {
  constructor(private notifierService: NotifierService) { }

  public catchBadResponse: (errorResponse: any) => Observable<any> = (errorResponse: any) => {
    let res = <Response>errorResponse;
    let err = res.json();
    let emsg = err ?
      (err.error ? err.error : JSON.stringify(err)) :
      (res.statusText || 'unknown error');
    this.notifierService.notify(`Error - Bad Response - ${emsg}`);
    return Observable.of(false);
  }
}

/* NinjaCodeGen.com by DNAfor.NET */
