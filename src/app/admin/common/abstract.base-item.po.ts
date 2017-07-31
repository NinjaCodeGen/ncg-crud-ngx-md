
import { browser, by, element, ElementFinder, protractor, ProtractorBy, WebElement } from 'protractor';

import { AdminView } from '../admin.po';
import { ValidationService } from '../common/services/validation.service';
import { E2eHelper } from '../common/e2eHelper';

export abstract class AbstractBaseItemPageObject {
  adminView = new AdminView();
  helper = new E2eHelper();
  validationService = new ValidationService();

  // --Elements--
  abstract backButton: ElementFinder;
  abstract cancelButton: ElementFinder;
  abstract resetButton: ElementFinder;
  abstract deleteButton: ElementFinder;
  abstract submitButton: ElementFinder;

  abstract confirmationDialogButton: ElementFinder;
  abstract modalCancelButton: ElementFinder;
  abstract modalOKButton: ElementFinder;

  constructor(protected metaData: any) { }

  checkIfUniqueId(list, id): boolean {
    let result = false;
    let invalid = 0;

    list.forEach((item) => {
      if (item.id == id.toString()) {
        invalid++;
      }
    });

    result = invalid == 0 ? true : false;
    return result;
  }

  checkIfValMsgExists(valMsg: string, valMsgXPath: string): any {
    let messageArray = [];
    let numberOfMessages: number;
    let promises = [];

    return element.all(by.xpath(valMsgXPath)).then((valMsgElArray) => {
      messageArray = valMsgElArray;
      numberOfMessages = valMsgElArray.length;
      return valMsgElArray;
    }).then(() => {
      for (let i = 0; i < numberOfMessages; i++) {
        promises.push(this.checkValMsg(messageArray[i], valMsg));
      }
    }).then(() => {
      Promise.all(promises).then((results) => {
        return results.some(item => item === true);
      });
    });
  }

  checkValMsg(webElement: any, valMsg: string): Promise<{}> {
    let isMatched: boolean = false;

    return new Promise((resolve) => {
      webElement.getText().then((text) => {
        if (text === valMsg) {
          isMatched = true;
        } else {
          isMatched = false;
        }

        resolve(isMatched);
      });
    });
  }

  clearContent(control: any) {
    control.clear();
    control.sendKeys(' ');
    control.sendKeys(protractor.Key.BACK_SPACE);
  }

  createNewItem(item: any): void {
    // UNDONE: this.listPO.goToAdd();
    console.log('put this .gotToAdd before createNewItem or something')
    Object.keys(item).forEach((key) => {
      this.sendDataToControl(item, key);
    });

    this.helper.scrollIntoViewAndClick(this.submitButton);
  }

  generateInvalidData(fieldKey: string, validationType: string): string {
    let testData: string = '';
    let validationValue = this.metaData.properties[fieldKey]['x-ncg'].validations[validationType].value;

    switch (validationType) {
      case 'required':
        testData = '';
        break;
      case 'minLength':
        if (validationValue > 1) {
          testData = 'a';
        } else {
          testData = '';
        }
        break;
      case 'maxLength':
        for (let i = 0; i <= validationValue; i++) {
          testData = 'a'.repeat(validationValue + 1);
        }
        break;
      case 'pattern':
        testData = '!Ả他あ invalid pattern';
        break;
      case 'maximum':
        testData = (Number(validationValue) + 1).toString();
        break;
      case 'minimum':
        testData = (Number(validationValue) - 1).toString();
        break;
      default:
        break;
    }

    return testData;
  }

  generateUniqueId(list): number {
    let listLength = Object.keys(list).length;
    let i = 1;

    while (i <= listLength) {
      if (this.checkIfUniqueId(list, i)) {
        return i;
      } else {
        i++;
      }
    }

    return ++listLength;
  }

  getValMsg(fieldKey: string, validationType: string): string {
    let valMsg = '';
    valMsg = this.metaData.properties[fieldKey]['x-ncg'].validations[validationType].message
      ? this.metaData.properties[fieldKey]['x-ncg'].validations[validationType].message
      : ValidationService.getGenericValMsg(fieldKey, validationType, this.metaData);

    return valMsg;
  }

  isSubmitElementDisabled(): any {
    return this.submitButton.isEnabled().then((result) => {
      return !result;
    });
  }

  updateCheckboxValue(checkboxControl: WebElement, intendedValue: boolean) {
    checkboxControl.getAttribute('ng-reflect-model').then((value) => {
      if (intendedValue.toString() != value) {
        checkboxControl.click();
      }
    });
  }

  sendDataToControl(item: any, key: any): void {
    let control = element(by.id(key + 'Input'));
    switch (key.toString()) {
      case 'bit':
      case 'isActive':
        control.getWebElement().then((controlElement) => {
          this.updateCheckboxValue(controlElement, item[key]);
        });
        break;
      case 'date':
      case 'createdDate':
      case 'updatedDate':
        {
          let convertedDate = this.helper.convertToSomeDateFormat('mmddyyyy', item[key]);
          control.click();
          control.sendKeys(convertedDate);
          break;
        }
      default:
        {
          control.clear();
          control.sendKeys(item[key]);
          break;
        }
    }
  }

  submit() {
    this.helper.scrollIntoViewAndClick(this.submitButton);
  }
}
