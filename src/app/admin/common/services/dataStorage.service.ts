import { Injectable } from '@angular/core';

@Injectable()
export class RestoreService<T> {
  private originalItem: T;
  private currentItem: T;

  public get(): T {
    return this.currentItem;
  }

  public set(item: T) {
    this.originalItem = this.clone(item);
    this.currentItem = item;
  }

  public restoreItem(): T {
    this.currentItem = this.clone(this.originalItem);
    return this.get();
  }

  public clone(item: T): T {
    return JSON.parse(JSON.stringify(item));
  }
}

export class LocalStorageService {
  public get(key: string) {
    // Check if the key is not expired
    if (!this.isExpired(key)) {
      // get data from key in localStorage and return
      let storageObject = JSON.parse(localStorage.getItem(key));

      return storageObject.data;
    } else {
      // remove key data if it's expired or doesn't exist.
      this.remove(key);
    }

    return null;
  }

  /// key                : data key
  /// data               : data to save in cache
  /// expireTimeInMinutes: expire time in minutes, must be greater than 0 or it will be set as default is 24hours
  public set(key: string, data: any, expireTimeInMinutes: number = 1440) {
    expireTimeInMinutes = expireTimeInMinutes <= 0 ? expireTimeInMinutes = 1440 : expireTimeInMinutes;

    let storageObject = {
      data: data,
      timeStamp: new Date().getTime(),
      expireTimeInMiliseconds: expireTimeInMinutes * 1000
    };

    localStorage.setItem(key, JSON.stringify(storageObject));
  }

  public remove(key: string) {
    localStorage.removeItem(key);
  }

  public isExpired(key: string) {
    if (localStorage.getItem(key) !== null) {
      let storageObject = JSON.parse(localStorage.getItem(key));
      let currentTimeStamp = new Date().getTime();

      if (storageObject.timeStamp + storageObject.expireTimeInMiliseconds > currentTimeStamp) {
        return false;
      }
    }
    return true;
  }
}

/* NinjaCodeGen.com by DNAfor.NET */
