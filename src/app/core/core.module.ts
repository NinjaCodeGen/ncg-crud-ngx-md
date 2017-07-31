import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EntityService } from './entity.service';
import { ExceptionService } from './exception.service';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { ModalDialogModule } from './modalDialog/modalDialog.module';
import { BusyIndicatorModule } from './busyIndicator/busyIndicator.module';
import { NotifierModule } from './notifier/notifier.module';

// imports: imports the module's exports. which is usually declarables and providers
// in our case the spinner has no providers.
//
// exports: exports modules AND components/directives/pipes that other modules may want to use
@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule,
    ModalDialogModule, BusyIndicatorModule, NotifierModule
  ],
  exports: [
    CommonModule, FormsModule, RouterModule,
    ModalDialogModule, BusyIndicatorModule, NotifierModule
  ],
  providers: [
    EntityService,
    ExceptionService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

/* NinjaCodeGen.com by DNAfor.NET */
