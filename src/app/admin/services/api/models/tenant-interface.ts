

'use strict';


import { User } from './user';

export interface ITenant {

  // keys
  id?: number;

  // properties
  concurrencyStamp?: string;
  created?: string;
  issuerValue?: string;
  name?: string;


  // nav many properties
  users?: Array<User>;


  
}