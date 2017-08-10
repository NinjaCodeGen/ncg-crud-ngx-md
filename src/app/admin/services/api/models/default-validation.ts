// angular
import { Injectable } from '@angular/core';

import { IDefaultValidation } from './default-validation-interface';

import { SomeItem } from './some-item';

'use strict';

export class DefaultValidation implements IDefaultValidation {

  // keys
  id: number;

  // properties
  valEmailAddressPattern: string;
  valMin0Max100Value: number;
  valMin2Max8Length: string;
  valRequiredField: string;


}
