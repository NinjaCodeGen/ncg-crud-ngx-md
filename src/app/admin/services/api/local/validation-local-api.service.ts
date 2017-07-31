// angular
import { Injectable } from '@angular/core';

// models
import { Validation } from './../models';

// services
import { BaseApiLocal } from './../../../common/services/api/BaseApiLocal';
import { LocalQueryHelper } from './../../../common/services/api/LocalQueryHelper';

'use strict';

@Injectable()
export class ValidationApiLocal extends BaseApiLocal<Validation> {
  public list: Validation[];
  public keyName: string = 'id';
  public resourceName: string = 'validation';

  constructor(_LocalQueryHelper: LocalQueryHelper) {
    super(_LocalQueryHelper);

    this.setListData();
  }

  convertTo(list: any): Validation[] {
    let listToReturn: Validation[] = [];

    list.forEach(
      (item) => {
        listToReturn.push(item);
      });
    return listToReturn;
  }

  protected setListData() {
    let validationSampleData = require('./Validation.json');

    this.list = this.convertTo(validationSampleData.value);
  }
}
