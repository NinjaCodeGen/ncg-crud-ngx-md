// angular
import { Injectable } from '@angular/core';

import { INcgOther } from './ncg-other-interface';


export class NcgOther implements INcgOther {

  // keys
  id: number;

  // properties
  itemNotDisplayed: string;
  itemNotGenerated: string;
  listNotDisplayed: string;
  listNotGenerated: string;
  orderAThird: string;
  orderBSecond: string;
  orderCFirst: string;
  withTitleDescDefaultMetaData: string;


}
