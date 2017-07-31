// angular
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

// core services
import { EntityService, ModalDialogService, BusyIndicatorService, NotifierService } from '../../../core';

// admin services
import { BaseApi, IListWithCount, IQuery } from './../services';

export abstract class BaseListComponent<T> implements OnInit {
  public static filterType = [
    {
      display: '&',
      value: 'and',
      description: ''
    },
    {
      display: '|',
      value: 'or',
      description: ''
    },
    {
      display: '<',
      value: 'lt',
      description: 'Less than'
    },
    {
      display: '>',
      value: 'gt',
      description: 'Greater than'
    },
    {
      display: '>=',
      value: 'ge',
      description: 'Greater than or equal to'
    },
    {
      display: '<=',
      value: 'le',
      description: 'Less than or equal to'
    },
    {
      display: '<>',
      value: 'ne',
      description: 'Different from'
    },
    {
      display: '=',
      value: 'eq',
      description: 'Equal to'
    },
    {
      display: 'Ends With',
      value: 'endswith',
      description: 'Returns all value that end with'
    },
    {
      display: 'Starts With',
      value: 'startswith',
      description: 'Returns all value that start with'
    },
    {
      display: 'Index of',
      value: 'indexof',
      description: ''
    }];

  public componentName: string;
  public errorMessage: string;
  public fieldFilterModel: Array<any> = [];
  public isLoading: boolean;
  public keyName: string = 'id';
  public listWithCount: IListWithCount<T>;
  public rows: Array<T> = [];
  public searchValue: string = '';
  public selectedFilterField: string = null;
  public selectedFilterType: string = null;

  public filterValue = {
    filterField: '',
    filterType: ''
  };

  public paginationData = {
    currentPage: 1,
    isBoundaryLinks: true,
    isRotate: false,
    itemCount: 0,
    maxSize: 5,
  };

  public query: IQuery =
  {
    count: true,
    expand: null,
    filter: null,
    keywords: null,
    orderBy: null,
    skip: 0,
    select: null,
    top: 5
  };

  get filterType(): any {
    return BaseListComponent.filterType;
  }

  constructor(protected titleService: Title,
    protected entityService: EntityService,
    protected modalDialogService: ModalDialogService,
    protected busyIndicatorService: BusyIndicatorService,
    protected notifierService: NotifierService,
    private baseApi: BaseApi<T>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  public ngOnInit() {
    this.populateComponentDataAsync();
    this.getList();
    console.log(`ngOnInit ${this.componentName} component`);
  }

  public delete(id: number) {
    this.isLoading = true;
    const msg = `Do you want to delete item?`;
    this.modalDialogService.activate(msg).then(responseOK => {
      if (responseOK) {
        this.isLoading = true;
        this.baseApi.delete(id).subscribe(
          (result) => { // success
            this.isLoading = false;
            this.getList();
          }, (error) => { // failure
            this.isLoading = false;
            this.handleServiceError('Delete', error);
          }, () => console.log('Delete Completed') // finally
        );
      }
    });
  }

  public edit(item) {
    this.router.navigate([item.id], { relativeTo: this.activatedRoute });
  }

  public getList() {
    this.busyIndicatorService.show();
    this.isLoading = true;
    this.baseApi.get(this.query.expand, this.query.filter, this.query.select, this.query.orderBy,
      this.query.top, this.query.skip, this.query.count, this.query.keywords, null)
      .subscribe(
      listWithCount => {
        this.listWithCount = listWithCount;
        this.paginationData.itemCount = this.listWithCount.count;

        // TODO: for ngx-datatable
        this.rows = [];
        for (let i = 0; i < listWithCount.list.length; i++) {
          this.rows[this.query.skip + i] = listWithCount.list[i];
        }

      },
      error => {
        this.errorMessage = <any>error;
      }, () => {
        this.busyIndicatorService.hide();
        this.isLoading = false;
      });
  }

  public onColumnHeaderClicked(fieldName: string) {
    this.updateSort(fieldName);
  }

  public updateSort(fieldName: string) {
    if (this.query.orderBy === fieldName) {
      this.query.orderBy = fieldName + ' desc';
    } else {
      this.query.orderBy = fieldName;
    }

    this.setPage(1);
  }

  public updateFilter(value) {
    if (this.filterValue.filterField !== null && this.filterValue.filterType !== null && value !== null) {
      switch (this.filterValue.filterType) {
        case 'endswith':
          this.query.filter = 'endswith(' + this.filterValue.filterField + ',' + ' \'' + value + '\')';
          break;

        case 'startswith':
          this.query.filter = 'startswith(' + this.filterValue.filterField + ',' + ' \'' + value + '\')';
          break;

        case 'indexof':
          this.query.filter = 'indexof(' + this.filterValue.filterField + ',' + ' \'' + value + '\') eq 0';
          break;

        default:
          this.query.filter = this.filterValue.filterField + ' ' + this.filterValue.filterType + ' \'' + value + '\'';
          break;
      }
    } else {
      this.query.filter = '';
    }

    this.getList();
  }

  protected abstract populateComponentDataAsync();

  private handleServiceError(op: string, err: any) {
    console.error(`${op} error: ${err.message || err}`);
  }

  private setPage(pageNo: number): void {
    this.paginationData.currentPage = pageNo;
    this.query.skip = ((this.paginationData.currentPage - 1) * this.query.top);
    this.getList();
  }

  private pageChanged(event: any): void {
    this.setPage(event.page);
  }

  private onPageChanged(event: any): void {
    this.setPage(event.offset + 1);
  }
}

/* NinjaCodeGen.com by DNAfor.NET */
