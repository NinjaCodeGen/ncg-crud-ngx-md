// angular
import { NgModule } from '@angular/core';

import {
  DefaultTypeAndFormatApiLocal,
  DefaultValidationApiLocal,
  NcgOtherApiLocal,
  NcgTypeAndFormatApiLocal,
  NcgValidationApiLocal,
  SomeItemApiLocal,
  TenantApiLocal,
  TypeOfTypeApiLocal,
  UserApiLocal,
  ValidationApiLocal
} from './api/local';

import { DataContextLocal } from './api/local/data-context-local.service';
import { DataContext } from './api/rest/data-context.service';

@NgModule({ 
  providers: [
    DefaultTypeAndFormatApiLocal,
    DefaultValidationApiLocal,
    NcgOtherApiLocal,
    NcgTypeAndFormatApiLocal,
    NcgValidationApiLocal,
    SomeItemApiLocal,
    TenantApiLocal,
    TypeOfTypeApiLocal,
    UserApiLocal,
    ValidationApiLocal,
    { provide: DataContext, useClass: DataContextLocal }
  ]
})
export class ServiceModule { }

/* NinjaCodeGen.com by DNAfor.NET */