import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const APPMENUITEMS = [
  {
    state: 'admin',
    name: 'ADMIN',
    type: 'sub',
    icon: 'equalizer',
    badge: [
      { type: 'purple', value: '10' }
    ],
    children: [
      { state: 'defaultTypeAndFormat', name: 'Default Type And Format' },
      { state: 'defaultValidation', name: 'Default Validation' },
      { state: 'ncgOther', name: 'Ncg Other' },
      { state: 'ncgTypeAndFormat', name: 'Ncg Type And Format' },
      { state: 'ncgValidation', name: 'Ncg Validation' },
      { state: 'someItem', name: 'Some Item' },
      { state: 'tenant', name: 'Tenant' },
      { state: 'typeOfType', name: 'Type Of Type' },
      { state: 'user', name: 'User' },
      { state: 'validation', name: 'Validation' }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return APPMENUITEMS;
  }
}