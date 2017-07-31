import { browser, protractor } from 'protractor';

export class E2eHelper {
  EC = protractor.ExpectedConditions;
  timeoutWait = 20000;

  checkIfUniqueId(list, id): boolean {
    let result = false;
    let invalid = 0;

    list.forEach((item) => {
      if (item.id === id.toString()) {
        invalid++;
      }
    });

    result = invalid === 0 ? true : false;
    return result;
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

  convertToSomeDateFormat(format: string, date: string) {
    const formattedDate = new Date(date);
    let dateString = '';

    switch (format) {
      case 'mmddyyyy':
        dateString = ('0' + (formattedDate.getMonth() + 1)).slice(-2) + ('0' + formattedDate.getDate()).slice(-2) + formattedDate.getFullYear().toString();
        break;
      default:
    }

    return dateString;
  }

  readJsonFile(jsonFile) {
    const fs = require('fs');
    let data = fs.readFileSync(jsonFile);
    return JSON.parse(data);
  }

  writeToFile(fileName, output) {
    const fs = require('fs');
    fs.writeFile(fileName, output, function (err) {
      if (err) {
        console.error(err);
      }
      console.log('Written!');
    });
  }

  appendToFile(fileName, output) {
    const fs = require('fs');
    fs.appendFile(fileName, output, function (err) {
      if (err) {
        console.error(err);
      }
      console.log('Appended!');
    });
  }

  isPresent(el) {
    return browser.wait(this.EC.presenceOf(el), this.timeoutWait, 'Element is taking too long to appear in the DOM');
  }

  isNotPresent(el) {
    return browser.wait(this.EC.stalenessOf(el), this.timeoutWait, 'It is taking long to perform the checking of element not being in the DOM');
  }

  isClickable(el) {
    return browser.wait(this.EC.elementToBeClickable(el), this.timeoutWait, 'Element is not ready to click on');
  }

  isVisible(el) {
    return browser.wait(this.EC.visibilityOf(el), this.timeoutWait, 'Element is not visible');
  }

  isNotVisible(el) {
    return browser.wait(this.EC.invisibilityOf(el), this.timeoutWait, 'Element is still visible');
  }

  urlChanged(urlToBeChecked) {
    return browser.getCurrentUrl().then(function (url) {
      return url === urlToBeChecked;
    });
  };

  scrollIntoView(el) {
    browser.executeScript(function () { arguments[0].scrollIntoView(); }, el.getWebElement());
  }

  scrollIntoViewAndClick(el) {
    browser.executeScript(function () { arguments[0].scrollIntoView(); }, el.getWebElement());
    el.click();
  }

  hasClass(el, className) {
    return el.getAttribute('class').then((classAttribute) => {
      return (classAttribute.indexOf(className) !== -1);
    })
  }

  sendKeys(el, inputText) {
    if (inputText !== '') {
      console.log(el);
      inputText.split('').forEach((c) => { el.getWebElement().sendKeys(c) });
    } else {
      el.sendKeys('');
    }
  }

}

/* NinjaCodeGen.com by DNAfor.NET */
