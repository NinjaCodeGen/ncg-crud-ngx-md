import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LocalQueryHelper, LocalStorageService, RestoreService, ValidationService } from './services';

// 3rd party
import {
  MdCardModule, MdCheckboxModule, MdIconModule, MdInputModule,
  MdRadioModule, MdButtonModule, MdProgressBarModule, MdSelectModule, MdToolbarModule
} from "@angular/material";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';

// pipes
import { DisplayDataTransformPipe, OrderBy } from './pipes';

// directives
import { InputDebounceComponent } from './directives/input-debounce';

// components
import { ParentFilterAndPagingComponent } from './components';

@NgModule({
  declarations: [
    DisplayDataTransformPipe,
    InputDebounceComponent,
    OrderBy,
    ParentFilterAndPagingComponent
  ],
  exports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    InputDebounceComponent, 
    FlexLayoutModule,
    NgxDatatableModule,
    MdButtonModule, MdCardModule, MdCheckboxModule, MdIconModule, MdInputModule,
    MdRadioModule, MdProgressBarModule, MdSelectModule, MdToolbarModule,
    ParentFilterAndPagingComponent
  ],
  entryComponents: [
    ParentFilterAndPagingComponent
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    FlexLayoutModule,
    NgxDatatableModule,
    MdButtonModule, MdCardModule, MdCheckboxModule, MdIconModule, MdInputModule,
    MdRadioModule, MdProgressBarModule, MdSelectModule, MdToolbarModule
  ],
  providers: [
    FormBuilder,
    LocalQueryHelper,
    LocalStorageService,
    RestoreService,
    ValidationService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AdminCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AdminCommonModule,
      providers: [
        FormBuilder
      ]
    }
  }
}

/* NinjaCodeGen.com by DNAfor.NET */
