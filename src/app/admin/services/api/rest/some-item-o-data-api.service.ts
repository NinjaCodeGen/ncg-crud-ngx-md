// angular
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

// 3rd party
import * as Rx from 'rxjs';

// services
import { BaseApi } from './../../../common/services/api/BaseApi';
import { Error } from './../../../common/services/api/Error';
import { HttpHelper } from './../../../common/services/api/HttpHelper';

import { SomeItem } from './../models';

@Injectable()
export class SomeItemApi extends BaseApi<SomeItem> {
  public keyName: string = '';
  public resourceName: string = 'someItem';
  public defaultHeaders: Headers = new Headers({});

  constructor(protected http: Http) {
    super(http);
  }
}