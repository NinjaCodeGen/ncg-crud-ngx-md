// angular
import { Component, Injectable } from '@angular/core';

// services
import * as APIs from './';

@Injectable()
export class DataContext {
  
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
    defaultTypeAndFormatApi: APIs.DefaultTypeAndFormatApi,
    defaultValidationApi: APIs.DefaultValidationApi,
    ncgOtherApi: APIs.NcgOtherApi,
    ncgTypeAndFormatApi: APIs.NcgTypeAndFormatApi,
    ncgValidationApi: APIs.NcgValidationApi,
    someItemApi: APIs.SomeItemApi,
    tenantApi: APIs.TenantApi,
    typeOfTypeApi: APIs.TypeOfTypeApi,
    userApi: APIs.UserApi,
    validationApi: APIs.ValidationApi
    
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
    // this.defineLazyLoadedRepos();
  }

  
}
