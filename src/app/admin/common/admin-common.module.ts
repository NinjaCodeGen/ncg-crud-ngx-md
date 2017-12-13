import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LocalQueryHelper, LocalStorageService, RestoreService, ValidationService } from './services';

// 3rd party
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatInputModule,
  MatProgressBarModule, MatRadioModule, MatSelectModule, MatToolbarModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

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
    MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatInputModule,
    MatRadioModule, MatProgressBarModule, MatSelectModule, MatToolbarModule,
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
    MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatInputModule,
    MatRadioModule, MatProgressBarModule, MatSelectModule, MatToolbarModule
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
