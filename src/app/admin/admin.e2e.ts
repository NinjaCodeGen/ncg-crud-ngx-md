import { browser, by, element } from 'protractor';
import { AdminView } from './admin.po';

describe('Admin', () => {
  describe('As a user, I', () => {
    let adminView = new AdminView();

    it('can go to admin view', () => {
      adminView.goToAdminView();
      expect(browser.getCurrentUrl()).toContain(browser.baseUrl + '/admin');
    });

    it('can go to different views from admin view', () => {
      adminView.goToDefaultTypeAndFormatView();
      expect(browser.getCurrentUrl()).toContain(browser.baseUrl + '/admin/defaultTypeAndFormat');
      
      adminView.goToDefaultValidationView();
      expect(browser.getCurrentUrl()).toContain(browser.baseUrl + '/admin/defaultValidation');
      
      adminView.goToNcgOtherView();
      expect(browser.getCurrentUrl()).toContain(browser.baseUrl + '/admin/ncgOther');
      
      adminView.goToNcgTypeAndFormatView();
      expect(browser.getCurrentUrl()).toContain(browser.baseUrl + '/admin/ncgTypeAndFormat');
      
      adminView.goToNcgValidationView();
      expect(browser.getCurrentUrl()).toContain(browser.baseUrl + '/admin/ncgValidation');
      
      adminView.goToSomeItemView();
      expect(browser.getCurrentUrl()).toContain(browser.baseUrl + '/admin/someItem');
      
      adminView.goToTenantView();
      expect(browser.getCurrentUrl()).toContain(browser.baseUrl + '/admin/tenant');
      
      adminView.goToTypeOfTypeView();
      expect(browser.getCurrentUrl()).toContain(browser.baseUrl + '/admin/typeOfType');
      
      adminView.goToUserView();
      expect(browser.getCurrentUrl()).toContain(browser.baseUrl + '/admin/user');
      
      adminView.goToValidationView();
      expect(browser.getCurrentUrl()).toContain(browser.baseUrl + '/admin/validation');
      
    });
  });
});
