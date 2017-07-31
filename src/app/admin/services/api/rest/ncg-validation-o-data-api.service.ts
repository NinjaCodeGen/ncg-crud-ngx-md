// angular
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

// 3rd party
import * as Rx from 'rxjs';

// services
import { BaseApi } from './../../../common/services/api/BaseApi';
import { Error } from './../../../common/services/api/Error';
import { HttpHelper } from './../../../common/services/api/HttpHelper';

import { NcgValidation } from './../models';

'use strict';

@Injectable()
export class NcgValidationApi extends BaseApi<NcgValidation> {
  public keyName: string = '';
  public resourceName: string = 'ncgValidation';
  public defaultHeaders: Headers = new Headers({});

  constructor(protected http: Http) {
    super(http);
  }
}