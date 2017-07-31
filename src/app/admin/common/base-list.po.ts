
import { browser, by, element, ElementHelper, protractor } from 'protractor';
import { E2eHelper } from '../common/e2eHelper';
import { AbstractBaseListPageObject } from './abstract.base-list.po';

export class BaseListPageObject extends AbstractBaseListPageObject {

  // --Elements--
  searchInput = element(by.id('searchInput'));
  filterFieldSelect = element(by.id('filterFieldSelect'));
  filterTypeSelect = element(by.id('filterTypeSelect'));
  filterValueInput = element(by.xpath('//*[@id="searchInput"]/input'));
  recordsPerPageInput = element(by.id('recordsPerPageInput'));
  getButton = element(by.id('getButton'));
  addButton = element(by.id('addButton'));

  firstButton = element(by.className('icon-prev'));
  previousButton = element(by.className('icon-prev'));
  nextButton = element(by.className('icon-right'));
  lastButton = element(by.className('icon-skip'));

  itemsCountLabel = element(by.css('.page-count'));

  confirmationDialog = element(by.id('confirmationModal'));
  modalCancelButton = this.confirmationDialog.element(by.id('cancelButton'));
  modalOKButton = this.confirmationDialog.element(by.id('okButton'));

  editSelector = by.id('editButton');
  editButton = element(this.editSelector);

  deleteSelector = by.id('deleteButton');
  deleteButton = element(this.deleteSelector);

  sidebarToggleElement = by.id('sideBarToggleButton');
  sidebarCollapseElement = by.id('sideBarToggleButton');
  sidebarExpandedElement = by.id('sideBarToggleButton');

  currentPageNumberElement = element(by.xpath('//a[contains(@class,"k-state-selected")]'));

  goToAdd(): void {
    this.helper.scrollIntoViewAndClick(this.addButton);
  }

  getCellText(rowXPathIndex: string, columnIndex: number): any {
    return element(by.xpath(`//datatable-row-wrapper[${rowXPathIndex}]/datatable-body-row/div[2]/datatable-body-cell[${columnIndex}]/div`)).getText();
  }

  getFirstAndLastRecordValues(columnIndex): any {
    return this.getCellText('1', columnIndex).then((value) => {
      let arr = [];
      arr.push(value);
      return this.checkIfNavigationButtonDisabled('Last').then((isDisabled) => {
        if (!isDisabled) {
          this.goToLastPage();
        }

        return this.getCellText('last()', columnIndex).then((value) => {
          arr.push(value);
          return arr;
        });
      });
    });
  }

  sortColumn(columnIndex): void {
    element(by.xpath(`//datatable-header-cell[${columnIndex}]/div/span["Id"]`)).click();
  }

  getColumnIndex(columnLabel) {
    return element.all(by.xpath(`//datatable-header-cell[.//*/text()[normalize-space(.)="${columnLabel}"]]/preceding-sibling::*`))
      .count()
      .then((count) => count + 1);
  }

  getItemsCount(): any {
    return this.itemsCountLabel.getText()
      .then((text) => {
        return parseInt(text.substring(0, text.indexOf(' total')));
      });
  }

  getCurrentPageNumber(): any {
    return element(by.xpath("//li[contains(@class,'pages active')]/a"));
  }

  checkIfNavigationButtonDisabled(navigationButtonText): any {
    return element(by.xpath("//a[contains(text(),'" + navigationButtonText + "')]/parent::*[contains(@class,'disabled')]")).isPresent().then((isDisabled) => {
      return isDisabled;
    });
  }

  getNumberOfPagesOnScreen(): any {
    return element(by.xpath('//li[contains(@class,"pages")][last()]'))
      .getText()
      .then((text) => {
        return parseInt(text);
      });
  }

  // chooseFieldSelect(columnLabel: string) {
  //   // TODO: return element(by.xpath('//*[@id="fieldSelect"]/option[text()="' + columnLabel + '"]'));
  //   element(by.xpath('//*[@id="fieldSelect"]')).click();
  //   element(by.xpath('//md-option[text()="' + columnLabel + '"]')).click();
  // }

  filter(columnLabel: string, searchValue): void {
    //this.chooseFieldSelect(columnLabel);
    // TODO: element(by.xpath('//*[@id="fieldSelect"]/option[text()="' + columnLabel + '"]')).click();
    element(by.xpath('//*[@id="fieldSelect"]')).click();
    // TODO: element(by.xpath('//*[@id="filterType"]/option[text()="="]')).click();
    element(by.xpath('//md-option[text()="' + columnLabel + '"]')).click();
    element(by.xpath('//*[@id="searchInput"]/input')).clear();
    element(by.xpath('//*[@id="searchInput"]/input')).sendKeys(searchValue);
  }
}
