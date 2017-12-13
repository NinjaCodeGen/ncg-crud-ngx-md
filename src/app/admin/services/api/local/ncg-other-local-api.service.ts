// angular
import { Injectable } from '@angular/core';

// models
import { NcgOther } from './../models';

// services
import { BaseApiLocal } from './../../../common/services/api/BaseApiLocal';
import { LocalQueryHelper } from './../../../common/services/api/LocalQueryHelper';

@Injectable()
export class NcgOtherApiLocal extends BaseApiLocal<NcgOther> {
  public list: NcgOther[];
  public keyName: 'id';
  public resourceName: string = 'ncgOther';

  constructor(_LocalQueryHelper: LocalQueryHelper) {
    super(_LocalQueryHelper);

    this.setListData();
  }

  convertTo(list: any): NcgOther[] {
    let listToReturn: NcgOther[] = [];

    list.forEach(
      (item) => {
        listToReturn.push(item);
      });
    return listToReturn;
  }

  protected setListData() {
    let ncgOtherSampleData = require('./NcgOther.json');

    this.list = this.convertTo(ncgOtherSampleData.value);
  }
}
