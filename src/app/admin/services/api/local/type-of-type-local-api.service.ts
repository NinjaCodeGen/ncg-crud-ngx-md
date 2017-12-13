// angular
import { Injectable } from '@angular/core';

// models
import { TypeOfType } from './../models';

// services
import { BaseApiLocal } from './../../../common/services/api/BaseApiLocal';
import { LocalQueryHelper } from './../../../common/services/api/LocalQueryHelper';

@Injectable()
export class TypeOfTypeApiLocal extends BaseApiLocal<TypeOfType> {
  public list: TypeOfType[];
  public keyName: 'id';
  public resourceName: string = 'typeOfType';

  constructor(_LocalQueryHelper: LocalQueryHelper) {
    super(_LocalQueryHelper);

    this.setListData();
  }

  convertTo(list: any): TypeOfType[] {
    let listToReturn: TypeOfType[] = [];

    list.forEach(
      (item) => {
        listToReturn.push(item);
      });
    return listToReturn;
  }

  protected setListData() {
    let typeOfTypeSampleData = require('./TypeOfType.json');

    this.list = this.convertTo(typeOfTypeSampleData.value);
  }
}
