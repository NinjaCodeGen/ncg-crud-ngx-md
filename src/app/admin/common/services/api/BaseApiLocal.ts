import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import * as Rx from 'rxjs';
import { IApi } from './IApi';
import { LocalQueryHelper } from './LocalQueryHelper';

'use strict';

@Injectable()
export abstract class BaseApiLocal<T> implements IApi<T> {
  list: T[];
  keyName: string = 'id';

  constructor(public LocalQueryHelper: LocalQueryHelper) {
    this.setListData();
  }

  abstract convertTo(list: any): T[];

  public get(expand?: string, filter?: string, select?: string, orderBy?: string, top?: number, skip?: number, count?: boolean,
    keywords?: string,
    extraHttpRequestParams?: any): Rx.Observable<{ count: number, list: T[] }> {
    console.log('orderBy: ' + orderBy);

    let source = Rx.Observable.create(

      (observer) => {

        let timer = setTimeout(() => {
          try {
            let listWithCount = {
              count: this.list.length,
              list: this.list
            };

            this.changeDateStringToDateObject(listWithCount.list);

            this.dataNormalization(listWithCount.list);

            // filter
            if (filter) {
              listWithCount.list = this.LocalQueryHelper.filter(listWithCount.list, filter);
              listWithCount.count = listWithCount.list.length;
            }

            if (keywords) {
              listWithCount.list = this.LocalQueryHelper.filterByKeywords(listWithCount.list, keywords);
              listWithCount.count = listWithCount.list.length;
            }

            // sort
            if (orderBy) {
              listWithCount.list = this.LocalQueryHelper.sort(listWithCount.list, orderBy);
            }

            // paging
            if (top || skip) {
              listWithCount.list = this.LocalQueryHelper.paging(listWithCount.list, top, skip);
            }

            // select
            if (select) {
              // UNDONE:
            }

            observer.next(listWithCount);
            observer.complete();
          } catch (error) {
            console.log(observer);

            observer.error(error);
          }
        }, 500);

        return () => {
          clearTimeout(timer);
        };
      });

    return source;
  }

  public getById(id: number): Rx.Observable<T> {

    let source = Rx.Observable.create(
      (observer) => {

        let timer = setTimeout(() => {
          try {
            let itemToReturn = this.list.filter((item) => {
              return item[this.keyName] === id;
            })[0];
            observer.next(itemToReturn);
            observer.complete();
          } catch (error) {
            console.log(observer);
            observer.error(error);
          }
        }, 500);
        return () => {
          clearTimeout(timer);
        };

      });

    return source;
  }

  public getNewId() {
    return null; // this.list.length + 1;
  }

  private generateUniqueId(list): number {
    let listLength = Object.keys(list).length;
    let i = 1;

    while (i <= listLength) {
      if (this.checkIfUniqueId(list, i, this.keyName)) {
        return i;
      } else {
        i++;
      }
    }

    return ++listLength;
  }

  private checkIfUniqueId(list, id, idKeyName): boolean {
    let result = false;
    let invalid = 0;

    list.forEach((item) => {
      if (item[idKeyName] == id.toString()) {
        invalid++;
      }
    });

    result = invalid == 0 ? true : false;
    return result;
  }

  public post(item?: T, extraHttpRequestParams?: any): Rx.Observable<T> {
    console.log('BaseApiLocal post');
    let source = Rx.Observable.create(
      (observer) => {

        let timer = setTimeout(() => {
          try {
            item[this.keyName] = this.generateUniqueId(this.list);
            this.list.push(item);

            observer.next(item);
            observer.complete();
          } catch (error) {
            console.log(observer);
            observer.error(error);
          }
        }, 500);
        return () => {
          clearTimeout(timer);
        };
      });

    return source;
  }

  public delete(id: number, ifMatch?: string, extraHttpRequestParams?: any): Rx.Observable<{}> {
    console.log('BaseApiLocal delete');
    let source = Rx.Observable.create(
      (observer) => {
        let timer = setTimeout(() => {
          try {
            this.list = this.list.filter((item) => {
              return item[this.keyName] !== id;
            });

            observer.next(null);
            observer.complete();
          } catch (error) {
            console.log(observer);
            observer.error(error);
          }
        }, 500);
        return () => {
          clearTimeout(timer);
        };
      });

    return source;
  }

  public patch(id: number, item?: T, extraHttpRequestParams?: any): Rx.Observable<T> {
    console.log('BaseApiLocal patch');
    let source = Rx.Observable.create(
      (observer) => {

        let timer = setTimeout(() => {
          try {
            let itemToPatch = this.list.filter((item) => {

              return item[this.keyName] === id;
            })[0];

            this.extend(item, itemToPatch);

            observer.next(itemToPatch);
            observer.complete();
          } catch (error) {
            console.log(observer);

            observer.error(error);
          }
        }, 500);
        return () => {
          clearTimeout(timer);
        };

      });

    return source;
  }

  public save(item?: T, isEdited: boolean = true, extraHttpRequestParams?: any): Rx.Observable<T> {
    if (isEdited) {
      return this.patch(item[this.keyName], item);
    } else {
      return this.post(item);
    }
  }

  // HACK: for datetime input, improve to be more generic
  protected changeDateStringToDateObject(list) {
    list.forEach(item => {
      if (item.modifiedDate) {
        item.modifiedDate = new Date(item.modifiedDate);
      }
    });
  }

  protected dataNormalization(list) {
    list.forEach(item => {
      for (let key in item) {
        if (item.hasOwnProperty(key) && item[key] == undefined) {
          delete item[key];
        }
      }
    });
  }

  protected extend<T, U>(obj: T, extension: U) {
    Object.keys(obj).forEach((key) => {
      extension[key] = obj[key];
    });

    return extension as T & U;
  }

  protected setListData() {
  };
}

/* NinjaCodeGen.com by DNAfor.NET */
