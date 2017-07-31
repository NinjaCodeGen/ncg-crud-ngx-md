import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'myDisplayDataTransform', pure: false })
export class DisplayDataTransformPipe implements PipeTransform {
  public transform(value: any, args: any[] = null): any {
    let dataList = args.shift();

    if (dataList && dataList.length > 0) {
      let filterProp = args[0]; // this prop used for compare with value to filter item in the list
      let displayProp = args[1]; // this prop used for getting data to display.

      // let filterList = dataList.filter((item) => {
      //   return item[filterProp] && value && item[filterProp].toString() === value.toString();
      // });

      // return filterList[0][displayProp];
      return '';
    } else {
      return value;
    }
  }
}

/* NinjaCodeGen.com by DNAfor.NET */
