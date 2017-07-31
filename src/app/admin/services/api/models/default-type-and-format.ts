// angular
import { Injectable } from '@angular/core';

import { IDefaultTypeAndFormat } from './default-type-and-format-interface';

import { SomeItem } from './some-item';

'use strict';

export class DefaultTypeAndFormat implements IDefaultTypeAndFormat {

  // keys
  id: number;

  // properties
  someBoolean: boolean;
  someIntegerInt32: number;
  someNumber: number;
  someNumberDouble: number;
  someString: string;
  someStringDateTime: string;
  someStringEmail: string;
  someStringUid: string;
  someStringUri: string;

  // nav many properties
  someArray: Array<SomeItem>;

}
