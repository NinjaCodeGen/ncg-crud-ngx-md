import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from '../module-import-guard';
import { BusyIndicatorComponent } from './busyIndicator.component';
import { BusyIndicatorService } from './busyIndicator.service';

@NgModule({
  imports: [CommonModule],
  exports: [BusyIndicatorComponent],
  declarations: [BusyIndicatorComponent],
  providers: [BusyIndicatorService]
})
export class BusyIndicatorModule {
  constructor( @Optional() @SkipSelf() parentModule: BusyIndicatorModule) {
    throwIfAlreadyLoaded(parentModule, 'BusyIndicatorModule')
  }
}

/* NinjaCodeGen.com by DNAfor.NET */
