import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from '../module-import-guard';
import { ModalDialogComponent } from './modalDialog.component';
import { ModalDialogService } from './modalDialog.service';

@NgModule({
  imports: [CommonModule],
  exports: [ModalDialogComponent],
  declarations: [ModalDialogComponent],
  providers: [ModalDialogService],
})
export class ModalDialogModule {
  constructor( @Optional() @SkipSelf() parentModule: ModalDialogModule) {
    throwIfAlreadyLoaded(parentModule, 'ModalDialogModule');
  }
}

/* NinjaCodeGen.com by DNAfor.NET */
