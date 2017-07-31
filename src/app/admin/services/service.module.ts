// angular
import { NgModule } from '@angular/core';

import {
  DataContextLocal,
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
} from './api/local';

import { DataContext } from './api/rest';

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