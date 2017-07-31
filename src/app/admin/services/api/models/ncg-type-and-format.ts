// angular
import { Injectable } from '@angular/core';

import { INcgTypeAndFormat } from './ncg-type-and-format-interface';

import { SomeItem } from './some-item';

'use strict';

export class NcgTypeAndFormat implements INcgTypeAndFormat {

  // keys
  id: number;

  // properties
  someBoolean: boolean;
  someIntegerInt32: number;
  someNumber: number;
  someNumberDouble: number;
  someString: string;
  someStringDateTime: string;
  someStringUid: string;

  // nav many properties
  someArray: Array<SomeItem>;

}
