// angular
import { Injectable } from '@angular/core';

// models
import { User } from './../models';

// services
import { BaseApiLocal } from './../../../common/services/api/BaseApiLocal';
import { LocalQueryHelper } from './../../../common/services/api/LocalQueryHelper';

'use strict';

@Injectable()
export class UserApiLocal extends BaseApiLocal<User> {
  public list: User[];
  public keyName: string = 'id';
  public resourceName: string = 'user';

  constructor(_LocalQueryHelper: LocalQueryHelper) {
    super(_LocalQueryHelper);

    this.setListData();
  }

  convertTo(list: any): User[] {
    let listToReturn: User[] = [];

    list.forEach(
      (item) => {
        listToReturn.push(item);
      });
    return listToReturn;
  }

  protected setListData() {
    let userSampleData = require('./User.json');

    this.list = this.convertTo(userSampleData.value);
  }
}
