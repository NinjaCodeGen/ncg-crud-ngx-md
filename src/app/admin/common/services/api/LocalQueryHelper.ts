export class LocalQueryHelper {

  // this searches all fields on all items in list/array, splits the keywords, matches any keyword, case-insensative
  filterByKeywords(list, keywords) {
    return list.filter((listItem) => {
      // dump an object's own enumerable properties to the console
      for (let key of Object.keys(listItem)) {
        console.log(key + ': ' + listItem[key]);
        // if (listItem[key] && ("" + listItem[key]).toLowerCase().indexOf(keywords.toLowerCase()) > -1)
        //   return true;
        if (listItem[key]) {
          let isMatch = false;
          ('' + keywords).split(' ').forEach(
            (keyword) => {
              if (('' + listItem[key]).toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
                isMatch = true;
              }
            }
          );
          if (isMatch) {
            return true;
          }
        }
      }

      return false;
    });
  }

  public filter(list, keyword) {
    const filterSpecialType = ['startswith', 'endswith', 'indexof'];
    let selectedType = '';
    let selectedProperties = '';
    let mainKeyWord = '';

    filterSpecialType.forEach(type => {
      if (keyword.indexOf(type) === 0) {
        selectedType = type;
      }
    });

    if (selectedType !== '') {
      // filter keyword to get the selected properties and filter value
      const resultArray = keyword.replace(selectedType + '(', '').replace(')', '').replace(/'/g, '').split(',');
      selectedProperties = resultArray[0];
      mainKeyWord = resultArray[1].trim().toLowerCase();

      switch (selectedType) {
        case 'startswith':
          return list.filter((item) => {
            return (item[selectedProperties] && item[selectedProperties].toString().toLowerCase().match('^' + mainKeyWord));
          });

        case 'endswith':
          return list.filter((item) => {
            return (item[selectedProperties] && item[selectedProperties].toString().toLowerCase().match(mainKeyWord + '$'));
          });

        case 'indexof':
          mainKeyWord = mainKeyWord.split(' ')[0].toLowerCase();

          return list.filter((item) => {
            return (item[selectedProperties] && item[selectedProperties].toString().toLowerCase().indexOf(mainKeyWord) > -1);
          });
      }

    } else {
      // split the keyword string to get properties, type and mainFilterKeywork
      const resultArray = keyword.split(' ');
      selectedProperties = resultArray[0];
      selectedType = resultArray[1];
      mainKeyWord = resultArray[2].replace(/'/g, '');

      switch (selectedType) {
        case 'and':
        case 'or':
          // TODO: need to be implemented.
          return list;

        case 'eq':
          return list.filter((item) => {
            return (item[selectedProperties] && item[selectedProperties].toString().toLowerCase() === mainKeyWord.toLowerCase());
          });

        case 'lt':
          return list.filter((item) => {
            return (item[selectedProperties] && Number(item[selectedProperties]) < Number(mainKeyWord));
          });
        case 'gt':
          return list.filter((item) => {
            return (item[selectedProperties] && Number(item[selectedProperties]) > Number(mainKeyWord));
          });

        case 'ge':
          return list.filter((item) => {
            return (item[selectedProperties] && Number(item[selectedProperties]) >= Number(mainKeyWord));
          });

        case 'le':
          return list.filter((item) => {
            return (item[selectedProperties] && Number(item[selectedProperties]) <= Number(mainKeyWord));
          });

        case 'ne':
          return list.filter((item) => {
            return (item[selectedProperties] && item[selectedProperties].toString() !== mainKeyWord);
          });

        default: return list;
      }
    }
  }

  public paging(list, odataTop, odataSkip) {
    const top = odataTop ? Number(odataTop) : 0;
    const skip = odataSkip ? Number(odataSkip) : 0;

    if (top >= 0 && skip >= 0) {
      list = list.slice(skip, skip + top);
    }

    return list;
  }

  public sort(list, orderBy: string) {
    let fieldName = orderBy;

    if (orderBy.indexOf(' desc') > -1) {
      fieldName = orderBy.substring(0, orderBy.indexOf(' desc'));

      return list.sort((a, b) => {
        if (typeof a[fieldName] === 'number') {
          console.log('sort1');
          return a[fieldName] - b[fieldName];
        }
        if (a[fieldName] < b[fieldName]) {
          console.log('sort2');
          return 1;
        }
        if (a[fieldName] > b[fieldName]) {
          console.log('sort3');
          return -1;
        }
        console.log('sort4');
        return 0;
      });
    }

    return list.sort((a, b) => {
      if (typeof a[fieldName] === 'number') {
        console.log('sort5');
        return b[fieldName] - a[fieldName];
      }
      if (a[fieldName] < b[fieldName]) {
        console.log('sort6');
        return -1;
      }
      if (a[fieldName] > b[fieldName]) {
        console.log('sort7');
        return 1;
      }
      console.log('sort8');
      return 0;
    });
  }
}

/* NinjaCodeGen.com by DNAfor.NET */
