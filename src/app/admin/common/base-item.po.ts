
import { browser, by, element, protractor } from 'protractor';
import { ValidationService } from '../common/services/validation.service';
import { AbstractBaseItemPageObject } from './abstract.base-item.po';

export class BaseItemPageObject extends AbstractBaseItemPageObject {

  // --Elements--
  backButton = element(by.id('backButton'));
  cancelButton = element(by.id('cancelButton'));
  resetButton = element(by.id('resetButton'));
  deleteButton = element(by.id('deleteButton'));
  submitButton = element(by.id('submitButton'));

  confirmationDialogButton = element(by.id('confirmationModal'));
  modalCancelButton = this.confirmationDialogButton.element(by.id('cancelButton'));
  modalOKButton = this.confirmationDialogButton.element(by.id('okButton'));

  constructor(protected metaData: any) {
    super(metaData);
  }

  getValMsgXPath(fieldKey: string): string {
    let elementXPath = '//*[@id="' + fieldKey + 'ErrorMsgs"]'; // TODO: '//*[@id="' + fieldKey + 'Input"]';
    let valMsgXPath = elementXPath; // TODO: + '/following-sibling::*';
    return valMsgXPath;
  }

  typeInInvalidData(fieldKey: string, validationType: string): void {
    let elementFinderString = '//*[@id="' + fieldKey + 'Input"]';
    let control = element(by.xpath(elementFinderString));

    this.clearContent(control);
    control.clear();
    control.sendKeys(this.generateInvalidData(fieldKey, validationType));
  }

  // editFirstItemInList(): void {
  //   element(by.id('editButton')).click();
  // }

  // editItem(item: any): void {
  //   this.editFirstItemInList();
  //   Object.keys(item).forEach((key) => {
  //     this.sendDataToControl(item, key);
  //   });
  //   this.submitButton.click();
  // }

  // editItemByIndex(itemIndex: number, item: any) {
  //   return element.all(by.id('editButton')).then
  //     ((buttons) => {
  //       buttons[itemIndex].click();
  //       Object.keys(item).forEach((key) => {
  //         this.sendDataToControl(item, key);
  //       });
  //       return this.submitButton.click();
  //     });
  // }

  // deleteFirstItemInView(): void {
  //   element(by.id('deleteButton')).click().then(() => {
  //     this.modalOKButton.click();
  //     // browser.switchTo().alert().accept();
  //   });
  // }
}
