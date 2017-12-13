// angular
import { Injectable } from '@angular/core';

// models
import { DefaultValidation } from './../models';

// services
import { BaseApiLocal } from './../../../common/services/api/BaseApiLocal';
import { LocalQueryHelper } from './../../../common/services/api/LocalQueryHelper';

@Injectable()
export class DefaultValidationApiLocal extends BaseApiLocal<DefaultValidation> {
  public list: DefaultValidation[];
  public keyName: 'id';
  public resourceName: string = 'defaultValidation';

  constructor(_LocalQueryHelper: LocalQueryHelper) {
    super(_LocalQueryHelper);

    this.setListData();
  }

  convertTo(list: any): DefaultValidation[] {
    let listToReturn: DefaultValidation[] = [];

    list.forEach(
      (item) => {
        listToReturn.push(item);
      });
    return listToReturn;
  }

  protected setListData() {
    let defaultValidationSampleData = require('./DefaultValidation.json');

    this.list = this.convertTo(defaultValidationSampleData.value);
  }
}
