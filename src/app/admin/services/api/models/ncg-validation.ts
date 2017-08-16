// angular
import { Injectable } from '@angular/core';

import { INcgValidation } from './ncg-validation-interface';

import { SomeItem } from './some-item';

'use strict';

export class NcgValidation implements INcgValidation {

  // keys
  id: number;

  // properties
  valEmailAddressPattern: string;
  valMin0Max100Value: number;
  valMin2Max8Length: string;
  valRequiredField: string;


}
