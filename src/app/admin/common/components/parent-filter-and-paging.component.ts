// angular 2
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

// api
import { IQuery } from './../services';

@Component({
  selector: 'parentFilterAndPaging',
  templateUrl: './parent-filter-and-paging.component.html'
})
export class ParentFilterAndPagingComponent {
  @Input() currentPage;
  @Input() fieldFilterModel;
  @Input() filterType;
  @Input() filterValue;
  @Input() itemCount;
  @Input() paginationData = {
    isBoundaryLinks: true,
    maxSize: 10,
    isRotate: false,
    currentPage: 1,
    numPages: 1,
    itemCount: 0
  };
  @Input() query: IQuery = {
    top: 5,
    skip: 0,
    count: true,
    expand: null,
    filter: null,
    keywords: null,
    select: null,
    orderBy: null,
  };

  @Output() onListClicked = new EventEmitter();
  @Output() onUpdatingFilter = new EventEmitter();
  @Output() onUpdatingSort = new EventEmitter();
  @Output() onPageChanged = new EventEmitter();

  constructor(private router: Router) { }

  getList() {
    this.onListClicked.next(null);
  }

  updateSort(fieldName: string) {
    this.onUpdatingSort.next(fieldName);
  }

  updateFilter(filter) {
    this.onUpdatingFilter.next(filter);
  }

  protected populateComponentDataAsync() { };

  private pageChanged(event: any): void {
    this.onPageChanged.next(event);
  };
}

/* NinjaCodeGen.com by DNAfor.NET */
