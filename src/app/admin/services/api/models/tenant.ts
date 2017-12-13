// angular
import { Injectable } from '@angular/core';

import { ITenant } from './tenant-interface';

import { User } from './user';

export class Tenant implements ITenant {

  // keys
  id: number;

  // properties
  concurrencyStamp: string;
  created: string;
  issuerValue: string;
  name: string;

  // nav many properties
  users: Array<User>;

}
