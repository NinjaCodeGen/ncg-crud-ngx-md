// angular
import { Injectable } from '@angular/core';

import * as APIs from './';

@Injectable()
export class DataContextLocal {
  public DefaultTypeAndFormatApi: any;
  public DefaultValidationApi: any;
  public NcgOtherApi: any;
  public NcgTypeAndFormatApi: any;
  public NcgValidationApi: any;
  public SomeItemApi: any;
  public TenantApi: any;
  public TypeOfTypeApi: any;
  public UserApi: any;
  public ValidationApi: any;

  constructor(
    defaultTypeAndFormatApi: APIs.DefaultTypeAndFormatApiLocal,
    defaultValidationApi: APIs.DefaultValidationApiLocal,
    ncgOtherApi: APIs.NcgOtherApiLocal,
    ncgTypeAndFormatApi: APIs.NcgTypeAndFormatApiLocal,
    ncgValidationApi: APIs.NcgValidationApiLocal,
    someItemApi: APIs.SomeItemApiLocal,
    tenantApi: APIs.TenantApiLocal,
    typeOfTypeApi: APIs.TypeOfTypeApiLocal,
    userApi: APIs.UserApiLocal,
    validationApi: APIs.ValidationApiLocal
    
  ) {
    this.DefaultTypeAndFormatApi = defaultTypeAndFormatApi;
    this.DefaultValidationApi = defaultValidationApi;
    this.NcgOtherApi = ncgOtherApi;
    this.NcgTypeAndFormatApi = ncgTypeAndFormatApi;
    this.NcgValidationApi = ncgValidationApi;
    this.SomeItemApi = someItemApi;
    this.TenantApi = tenantApi;
    this.TypeOfTypeApi = typeOfTypeApi;
    this.UserApi = userApi;
    this.ValidationApi = validationApi;
  }
}
  