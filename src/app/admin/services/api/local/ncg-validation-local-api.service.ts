// angular
import { Injectable } from '@angular/core';

// models
import { NcgValidation } from './../models';

// services
import { BaseApiLocal } from './../../../common/services/api/BaseApiLocal';
import { LocalQueryHelper } from './../../../common/services/api/LocalQueryHelper';

'use strict';

@Injectable()
export class NcgValidationApiLocal extends BaseApiLocal<NcgValidation> {
  public list: NcgValidation[];
  public keyName: string = 'id';
  public resourceName: string = 'ncgValidation';

  constructor(_LocalQueryHelper: LocalQueryHelper) {
    super(_LocalQueryHelper);

    this.setListData();
  }

  convertTo(list: any): NcgValidation[] {
    let listToReturn: NcgValidation[] = [];

    list.forEach(
      (item) => {
        listToReturn.push(item);
      });
    return listToReturn;
  }

  protected setListData() {
    let ncgValidationSampleData = require('./NcgValidation.json');

    this.list = this.convertTo(ncgValidationSampleData.value);
  }
}
