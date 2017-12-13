// angular
import { Injectable } from '@angular/core';

import { IDefaultValidation } from './default-validation-interface';


export class DefaultValidation implements IDefaultValidation {

  // keys
  id: number;

  // properties
  valEmailAddressPattern: string;
  valMin0Max100Value: number;
  valMin2Max8Length: string;
  valRequiredField: string;


}
