// angular
import { Injectable } from '@angular/core';

import { IUser } from './user-interface';

import { Tenant } from './tenant';

'use strict';

export class User implements IUser {

  // keys
  id: number;

  // properties
  address: string;
  age: number;
  createdBy: number;
  createdDate: string;
  emailAddress: string;
  gender: number;
  isActive: boolean;
  name: string;
  password: string;
  phone: string;
  reOrderLevel: number;
  tenantId: number;
  testString: number;
  uid: string;
  updatedBy: number;
  updatedDate: string;


  // nav one properties
  tenant: Tenant;
}
