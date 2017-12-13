// angular
import { Injectable } from '@angular/core';

import { ITypeOfType } from './type-of-type-interface';


export class TypeOfType implements ITypeOfType {

  // keys
  id: number;

  // properties
  abbreviation: string;
  createdBy: number;
  createdDate: string;
  isActive: boolean;
  key: string;
  name: string;
  order: number;
  parentID: string;
  typeID: string;
  uid: string;
  updatedBy: number;
  updatedDate: string;
  value: string;


}
