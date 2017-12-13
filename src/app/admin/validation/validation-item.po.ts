import { browser, by, element, protractor } from 'protractor';
import { AdminView } from '../admin.po';
import { ValidationService } from '../common/services/validation.service';
import { E2eHelper } from '../common/e2eHelper';
import { BaseItemPageObject } from '../common/base-item.po';

export class ValidationItemPageObject extends BaseItemPageObject {
  constructor() {
    super(require('./validation.metadata.json'));
  }
}
