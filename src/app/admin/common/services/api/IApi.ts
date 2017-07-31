import { Observable } from 'rxjs/observable';

export interface IApi<T> {
  keyName: string;

  /**
   * Get EntitySet
   * Returns the EntitySet
   * @param expand Expand navigation property
   * @param filter filter property
   * @param select select structural property
   * @param orderby order by some property
   * @param top top elements
   * @param skip skip elements
   * @param count include count in response
   */
  get(expand?: string, filter?: string, select?: string, orderBy?: string, top?: number, skip?: number, count?: boolean,
    keywords?: string,
    extraHttpRequestParams?: any): Observable<{ count: number, list: T[] }>;

  /**
   * Get entity by key.
   * Returns the entity with the key
   * @param id key
   * @param select description
   */
  getById(id: number, select?: string, extraHttpRequestParams?: any): Observable<T>;

  post(item?: T, extraHttpRequestParams?: any): Observable<T>;

  /**
   * Delete entity in EntitySet
   * @param id key
   * @param ifMatch If-Match header
   */
  delete(id: number, ifMatch?: string, extraHttpRequestParams?: any): Observable<{}>;

  /**
   * Update entity in EntitySet
   * @param id key
   * @param item The entity to patch
   */
  patch(id: number, item?: T, extraHttpRequestParams?: any): Observable<T>;

  save(item?: T, extraHttpRequestParams?: any): Observable<T>;
}



/* NinjaCodeGen.com by DNAfor.NET */
