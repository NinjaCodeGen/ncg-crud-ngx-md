
import { browser, by, element } from 'protractor';
import { AdminView } from '../admin.po';
import { TenantListPageObject } from './tenant-list.po';
import { TenantItemPageObject } from './tenant-item.po';
import { Tenant } from '../services/api/models/tenant';
import { ValidationService } from '../common/services/validation.service';
import { E2eHelper } from '../common/e2eHelper';
import * as changeCase from 'change-case';

describe('Tenant Item', () => {
  describe('As a user, I', () => {
    let helper = new E2eHelper();
    let adminView = new AdminView();
    let listPO = new TenantListPageObject();
    let itemPO = new TenantItemPageObject();
    let listWithCount = require('../services/api/local/Tenant.json');
    let metaData = require('./tenant.metadata.json');

    const keyName = 'id';
    const keyFilterName = 'Id';

    beforeEach(() => {
      adminView.goToAdminView();
      adminView.goToTenantView();
      adminView.toggleSideBar('close');
    });

    it('can add an item', () => {
      listPO.getItemsCount().then((recordCount) => {

        // copy 1st item
        let newItem = JSON.parse(JSON.stringify(listWithCount.value[0]));

        // assign new unique id for the new item
        newItem.id = itemPO.generateUniqueId(listWithCount.value);

        listPO.goToAdd();
        itemPO.createNewItem(newItem);

        listPO.getItemsCount().then((updatedRecordCount) => {
          expect(parseInt(updatedRecordCount)).toEqual(parseInt(recordCount) + 1);
        });
      });
    });

    it('can edit an item', () => {

      // copy first item
      let firstItem = JSON.parse(JSON.stringify(listWithCount.value[0]));
      firstItem[keyName] = listWithCount.value[1][keyName];

      listPO.editItemByIndex(1, firstItem)
        .then((buttons) => {
        Object.keys(firstItem).forEach((key) => {
          itemPO.sendDataToControl(firstItem, key);
        });
        itemPO.submit();
      });

      // filter records, using column label and the record value, to see if there is expected record with the updated data
      // listPO.filter(keyFilterName, firstItem[keyName]);
      expect(listPO.getItemsCount()).toBeGreaterThanOrEqual(1);
      // TODO: see if values copied over
    });

    it('can delete an item from item view', () => {
      // get record count before deleting a record
      listPO.getItemsCount().then((recordCount) => {
        listPO.deleteFirstItemInView();
        listPO.getItemsCount().then((recordCountAfterDeletion) => {
          expect(parseInt(recordCountAfterDeletion)).toEqual(parseInt(recordCount) - 1);
        });
      });
    });

    it('can go back to previous view', () => {
      let urlBeforeAddingNewRecord = browser.getCurrentUrl();
      listPO.goToAdd();

      // click back button and check the url is the same as before
      itemPO.backButton.click();
      expect(browser.getCurrentUrl()).toEqual(urlBeforeAddingNewRecord);
    });

    it('can cancel an action', () => {
      // set up data to be put in new record adding action
      let item = listWithCount.value[0];

      // get record count before adding
      listPO.getItemsCount().then((recordCount) => {
        listPO.goToAdd();

        // fill in all fields with the data
        Object.keys(item).forEach((key) => {
          itemPO.sendDataToControl(item, key);
        });

        itemPO.cancelButton.click();

        // check if record count still remains the same as before
        listPO.getItemsCount().then((updatedRecordCount) => {
          expect(parseInt(updatedRecordCount)).toEqual(parseInt(recordCount));
        });
      });
    });

    // loop and check all validations in meta data file
    it('can see validation messages', () => {
      let valMsg = '';
      let valMsgXPath = '';

      listPO.goToAdd();

      for (let fieldKey in metaData.properties) {
        if (metaData.properties[fieldKey]['x-ncg'].validations) {
          for (let validationType in metaData.properties[fieldKey]['x-ncg'].validations) {
            if (metaData.properties[fieldKey]['x-ncg'].validations[validationType] != null) {
              if (validationType == 'required' && metaData.properties[fieldKey]['x-ncg'].validations[validationType].value == false) {
                break;
              } else {
                itemPO.typeInInvalidData(fieldKey, validationType);
                valMsgXPath = itemPO.getValMsgXPath(fieldKey);
                valMsg = itemPO.getValMsg(fieldKey, validationType);
                expect(element(by.xpath(valMsgXPath)).getText()).toBe(valMsg);
              }
            }
          }
        }
      }
    });
  
    it('can see the required validation message for id field', () => {
      let valMsg = '';
      let valMsgXPath = '';
      let validationType = 'required';
      let fieldKey = 'id';
      listPO.goToAdd();

      itemPO.typeInInvalidData(fieldKey, validationType);
      valMsgXPath = itemPO.getValMsgXPath(fieldKey);
      valMsg = itemPO.getValMsg(fieldKey, validationType);
      expect(element(by.xpath(valMsgXPath)).getText()).toBe(valMsg);

    });
    
    it('can see the required validation message for id field', () => {
      let valMsg = '';
      let valMsgXPath = '';
      let validationType = 'required';
      let fieldKey = 'id';
      listPO.goToAdd();

      itemPO.typeInInvalidData(fieldKey, validationType);
      valMsgXPath = itemPO.getValMsgXPath(fieldKey);
      valMsg = itemPO.getValMsg(fieldKey, validationType);
      expect(element(by.xpath(valMsgXPath)).getText()).toBe(valMsg);

    });
    
    it('can see the required validation message for concurrencyStamp field', () => {
      let valMsg = '';
      let valMsgXPath = '';
      let validationType = 'required';
      let fieldKey = 'concurrencyStamp';
      listPO.goToAdd();

      itemPO.typeInInvalidData(fieldKey, validationType);
      valMsgXPath = itemPO.getValMsgXPath(fieldKey);
      valMsg = itemPO.getValMsg(fieldKey, validationType);
      expect(element(by.xpath(valMsgXPath)).getText()).toBe(valMsg);

    });
    
    it('can see the required validation message for created field', () => {
      let valMsg = '';
      let valMsgXPath = '';
      let validationType = 'required';
      let fieldKey = 'created';
      listPO.goToAdd();

      itemPO.typeInInvalidData(fieldKey, validationType);
      valMsgXPath = itemPO.getValMsgXPath(fieldKey);
      valMsg = itemPO.getValMsg(fieldKey, validationType);
      expect(element(by.xpath(valMsgXPath)).getText()).toBe(valMsg);

    });
    
    it('can see the required validation message for issuerValue field', () => {
      let valMsg = '';
      let valMsgXPath = '';
      let validationType = 'required';
      let fieldKey = 'issuerValue';
      listPO.goToAdd();

      itemPO.typeInInvalidData(fieldKey, validationType);
      valMsgXPath = itemPO.getValMsgXPath(fieldKey);
      valMsg = itemPO.getValMsg(fieldKey, validationType);
      expect(element(by.xpath(valMsgXPath)).getText()).toBe(valMsg);

    });
    
    it('can see the maxLength validation message for issuerValue field', () => {
      let valMsg = '';
      let valMsgXPath = '';
      let validationType = 'maxLength';
      let fieldKey = 'issuerValue';
      listPO.goToAdd();

      itemPO.typeInInvalidData(fieldKey, validationType);
      valMsgXPath = itemPO.getValMsgXPath(fieldKey);
      valMsg = itemPO.getValMsg(fieldKey, validationType);
      expect(element(by.xpath(valMsgXPath)).getText()).toBe(valMsg);

    });
    
    it('can see the minLength validation message for issuerValue field', () => {
      let valMsg = '';
      let valMsgXPath = '';
      let validationType = 'minLength';
      let fieldKey = 'issuerValue';
      listPO.goToAdd();

      itemPO.typeInInvalidData(fieldKey, validationType);
      valMsgXPath = itemPO.getValMsgXPath(fieldKey);
      valMsg = itemPO.getValMsg(fieldKey, validationType);
      expect(element(by.xpath(valMsgXPath)).getText()).toBe(valMsg);

    });
    
    it('can see the required validation message for name field', () => {
      let valMsg = '';
      let valMsgXPath = '';
      let validationType = 'required';
      let fieldKey = 'name';
      listPO.goToAdd();

      itemPO.typeInInvalidData(fieldKey, validationType);
      valMsgXPath = itemPO.getValMsgXPath(fieldKey);
      valMsg = itemPO.getValMsg(fieldKey, validationType);
      expect(element(by.xpath(valMsgXPath)).getText()).toBe(valMsg);

    });
    
    it('can see the required validation message for name field', () => {
      let valMsg = '';
      let valMsgXPath = '';
      let validationType = 'required';
      let fieldKey = 'name';
      listPO.goToAdd();

      itemPO.typeInInvalidData(fieldKey, validationType);
      valMsgXPath = itemPO.getValMsgXPath(fieldKey);
      valMsg = itemPO.getValMsg(fieldKey, validationType);
      expect(element(by.xpath(valMsgXPath)).getText()).toBe(valMsg);

    });
    
  });
});
