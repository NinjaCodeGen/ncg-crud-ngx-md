import { URLSearchParams } from '@angular/http';
import { oData } from './oData';

export class HttpHelper {
  static createOData(select: string, orderBy: string, expand: string, filter: string, top: number, skip: number, count: boolean): oData {

    let oDataItem: oData = {};

    if (select) {
      oDataItem.select = select;
    }
    if (orderBy) {
      oDataItem.orderBy = orderBy;
    }
    if (expand) {
      oDataItem.expand = expand;
    }
    if (filter) {
      oDataItem.filter = filter;
    }
    if (top) {
      oDataItem.top = top;
    }
    if (skip) {
      oDataItem.skip = skip;
    }
    if (count) {
      oDataItem.count = true;
    }

    return oDataItem;
  }

  static createUrlSearchParamsFromOData(oData: any): URLSearchParams {
    return HttpHelper.createUrlSearchParams(oData.select, oData.orderby, oData.expand, oData.filter, oData.top, oData.skip, oData.count);
  }

  static createUrlSearchParams(select: string, orderBy: string, expand: string, filter: string, top: number, skip: number, count: boolean): URLSearchParams {
    let urlSearchParams = new URLSearchParams();
    if (select) {
      urlSearchParams.set('$select', select);
    }
    if (orderBy) {
      urlSearchParams.set('$orderby', orderBy);
    }
    if (expand) {
      urlSearchParams.set('$expand', expand);
    }
    if (filter) {
      urlSearchParams.set('$filter', filter);
    }
    if (top) {
      urlSearchParams.set('$top', top.toString());
    }
    if (skip) {
      urlSearchParams.set('$skip', skip.toString());
    }
    if (count) {
      urlSearchParams.append('$count', 'true');
    }

    return urlSearchParams;
  }
}

/* NinjaCodeGen.com by DNAfor.NET */
