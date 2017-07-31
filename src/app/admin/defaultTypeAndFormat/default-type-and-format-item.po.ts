
import { browser, by, element, protractor } from 'protractor';
import { AdminView } from '../admin.po';
import { ValidationService } from '../common/services/validation.service';
import { E2eHelper } from '../common/e2eHelper';
import { BaseItemPageObject } from '../common/base-item.po';

export class DefaultTypeAndFormatItemPageObject extends BaseItemPageObject {
  constructor() {
    super(require('./default-type-and-format.metadata.json'));
  }
}
