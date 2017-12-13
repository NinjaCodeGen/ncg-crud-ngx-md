// angular
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

// 3rd party
import * as Rx from 'rxjs';

// services
import { BaseApi } from './../../../common/services/api/BaseApi';
import { Error } from './../../../common/services/api/Error';
import { HttpHelper } from './../../../common/services/api/HttpHelper';

import { NcgTypeAndFormat } from './../models';

@Injectable()
export class NcgTypeAndFormatApi extends BaseApi<NcgTypeAndFormat> {
  public keyName: string = '';
  public resourceName: string = 'ncgTypeAndFormat';
  public defaultHeaders: Headers = new Headers({});

  constructor(protected http: Http) {
    super(http);
  }
}