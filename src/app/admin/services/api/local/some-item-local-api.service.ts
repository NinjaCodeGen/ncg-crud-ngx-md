// angular
import { Injectable } from '@angular/core';

// models
import { SomeItem } from './../models';

// services
import { BaseApiLocal } from './../../../common/services/api/BaseApiLocal';
import { LocalQueryHelper } from './../../../common/services/api/LocalQueryHelper';

@Injectable()
export class SomeItemApiLocal extends BaseApiLocal<SomeItem> {
  public list: SomeItem[];
  public keyName: 'id';
  public resourceName: string = 'someItem';

  constructor(_LocalQueryHelper: LocalQueryHelper) {
    super(_LocalQueryHelper);

    this.setListData();
  }

  convertTo(list: any): SomeItem[] {
    let listToReturn: SomeItem[] = [];

    list.forEach(
      (item) => {
        listToReturn.push(item);
      });
    return listToReturn;
  }

  protected setListData() {
    let someItemSampleData = require('./SomeItem.json');

    this.list = this.convertTo(someItemSampleData.value);
  }
}
