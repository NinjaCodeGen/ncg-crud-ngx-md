
import { browser, by, element } from 'protractor';
import { AdminView } from '../admin.po';
import { ValidationListPageObject } from './validation-list.po';
import { E2eHelper } from '../common/e2eHelper';

describe('Validation List', () => {
  describe('As a user, I', () => {
    let helper = new E2eHelper();
    let adminView = new AdminView();
    let listPO = new ValidationListPageObject();

    beforeEach(() => {
      adminView.goToAdminView();
      adminView.goToValidationView();
      adminView.toggleSideBar('close');
    });

    it('can control paging', () => {
      let defaultNumberOfRecordsPerPage = 5;

      listPO.goToNextPage();
      listPO.goToPreviousPage();
      listPO.goToPageNumber(2);
      listPO.goToLastPage();
      listPO.goToFirstPage();

    });

    it('can sort records', () => {
      let columnLabel = "Id";
      listPO.getColumnIndex(columnLabel).then((columnIndex) => {
        let arrBeforeSorting = [];
        let arrAfterSorting = [];

        listPO.sortColumn(columnIndex);

        // Get values of first and last records of a field before doing sorting records again
        listPO.getFirstAndLastRecordValues(columnIndex).then((arr) => {
          arrBeforeSorting = arr;
        });

        // Sort records again
        listPO.sortColumn(columnIndex);

        // Get values of first and last records of that same field again
        listPO.getFirstAndLastRecordValues(columnIndex).then((arr) => {
          arrAfterSorting = arr;

          // Swap 2 items in the array (reverse the order of the array items)
          listPO.swapArrayItems(arrBeforeSorting, 0, 1);
          expect(arrBeforeSorting).toEqual(arrAfterSorting);
        });
      });
    });
  });
});
