
import { browser, by, element, ElementFinder, protractor, ProtractorBy } from 'protractor';
import { E2eHelper } from '../common/e2eHelper';
import { By } from 'selenium-webdriver';

export abstract class AbstractBaseListPageObject {
  helper = new E2eHelper();

  abstract addButton;

  // Filter Buttons
  abstract filterFieldSelect: ElementFinder;
  abstract filterTypeSelect: ElementFinder;
  abstract filterValueInput: ElementFinder;
  abstract getButton: ElementFinder;
  abstract recordsPerPageInput: ElementFinder;
  abstract searchInput: ElementFinder;

  abstract editSelector: By;
  abstract editButton: ElementFinder;

  abstract deleteSelector: By;
  abstract deleteButton: ElementFinder;

  // Pagination Buttons
  abstract firstButton: ElementFinder;
  abstract previousButton: ElementFinder;
  abstract nextButton: ElementFinder;
  abstract lastButton: ElementFinder;

  abstract confirmationDialog: ElementFinder;
  abstract modalCancelButton: ElementFinder;
  abstract modalOKButton: ElementFinder;

  abstract itemsCountLabel: ElementFinder;

  abstract currentPageNumberElement: ElementFinder;

  calculatePagingNumber(total: number, numberOfRecordsOnEachPage: number): number {
    if (total <= numberOfRecordsOnEachPage) {
      return 1;
    } else {
      return Math.ceil(total / numberOfRecordsOnEachPage);
    }
  }

  editFirstItemInList(): void {
    this.editButton.click();
  }

  editItemByIndex(itemIndex: number, item: any) {
    this.helper.scrollIntoView(element.all(this.editSelector).get(itemIndex));
    return element.all(this.editSelector).get(itemIndex).click();
  }

  deleteFirstItemInView(): void {
    this.deleteButton.click().then(() => {
      this.modalOKButton.click();
      // for browser dialog: browser.switchTo().alert().accept();
    });
  }

  getCurrentPageNumber(): any {
    return this.currentPageNumberElement;
  }

  goToFirstPage(): void {
    this.helper.scrollIntoViewAndClick(this.firstButton);
  }

  goToPreviousPage(): void {
    this.helper.scrollIntoViewAndClick(this.previousButton);
  }

  goToNextPage(): void {
    this.helper.scrollIntoViewAndClick(this.nextButton);
  }

  goToLastPage(): void {
    this.helper.scrollIntoViewAndClick(this.lastButton);
  }

  goToAdd(): void {
    this.helper.scrollIntoView(element(by.tagName('body')));
    this.addButton.click();
  }

  goToPageNumber(pageNumber): void {
    this.helper.scrollIntoViewAndClick(element(by.linkText(pageNumber.toString())));
  }

  setNumberOfRecordsPerPage(numberOfRecords): void {
    this.recordsPerPageInput.clear();
    this.recordsPerPageInput.sendKeys(numberOfRecords);
    this.getButton.click();
  }

  swapArrayItems(arr, itemIndex1, itemIndex2): void {
    const temp = arr[itemIndex1];
    arr[itemIndex1] = arr[itemIndex2];
    arr[itemIndex2] = temp;
    return arr;
  }
}
