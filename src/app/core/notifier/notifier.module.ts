import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from '../module-import-guard';
import { NotifierComponent } from './notifier.component';
import { NotifierService } from './notifier.service';

@NgModule({
  imports: [CommonModule],
  exports: [NotifierComponent],
  declarations: [NotifierComponent],
  providers: [NotifierService]
})
export class NotifierModule {
  constructor( @Optional() @SkipSelf() parentModule: NotifierModule) {
    throwIfAlreadyLoaded(parentModule, 'NotifierModule');
  }
}

/* NinjaCodeGen.com by DNAfor.NET */
