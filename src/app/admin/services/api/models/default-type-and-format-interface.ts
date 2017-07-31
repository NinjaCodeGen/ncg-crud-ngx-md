

'use strict';


import { SomeItem } from './some-item';

export interface IDefaultTypeAndFormat {

  // keys
  id?: number;

  // properties
  someBoolean?: boolean;
  someIntegerInt32?: number;
  someNumber?: number;
  someNumberDouble?: number;
  someString?: string;
  someStringDateTime?: string;
  someStringEmail?: string;
  someStringUid?: string;
  someStringUri?: string;


  // nav many properties
  someArray?: Array<SomeItem>;


  
}