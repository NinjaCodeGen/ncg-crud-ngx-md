// angular
import { Location } from '@angular/common';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

// 3rd party
import * as changeCase from 'change-case';
import * as moment from 'moment';

// core services
import { BusyIndicatorService, EntityService, ModalDialogService, NotifierService } from '../../../core';

// admin services
import { BaseApi, RestoreService, ValidationService } from './../services';

export abstract class BaseItemComponent<T> implements OnInit {
  public componentName: string;
  public customValidationMessages = {};
  public errorMessage: string;
  public formErrors = {};
  public formMetaData: any = {};
  public guidKey: string;
  public id: number = null;
  public isItemEdited: boolean;
  public isLoading: boolean;
  public isSaving: boolean;
  public item: T = null;
  public momentFunction: any;
  public myForm: FormGroup;
  public isSubmitAttempted: boolean = false;

  constructor(protected titleService: Title,
    protected baseApi: BaseApi<T>,
    protected entityService: EntityService,
    protected modalDialogService: ModalDialogService,
    protected busyIndicatorService: BusyIndicatorService,
    protected notifierService: NotifierService,
    protected formBuilder: FormBuilder,
    protected location: Location,
    protected restoreService: RestoreService<T>,
    protected activatedRoute: ActivatedRoute,
    protected router: Router,
    protected validationService: ValidationService
  ) {
    console.log(`${this.componentName} component base constructor`);
    this.momentFunction = moment;
  }

  protected abstract buildForm();
  protected abstract populateComponentDataAsync();
  protected abstract customValidate();

  public ngOnInit() {
    this.setItemId();
    this.populateComponentDataAsync();

    if (this.id === null || this.id === undefined) {
      this.isItemEdited = false;
      this.populateDataForNewItem();
    } else {
      this.isItemEdited = true;
      this.getItem();
    }
  }

  public getItem() {
    this.busyIndicatorService.show();
    this.isLoading = true;

    this.baseApi.getById(this.id)
      .subscribe((item) => {
        this.busyIndicatorService.hide();
        this.isLoading = false;
        this.convertDateStringToDate(item);
        this.restoreService.set(item);
        this.item = this.restoreService.get();
        this.buildForm();
      }, (error) => {
        this.busyIndicatorService.hide();
        this.isLoading = false;
        this.errorMessage = <any>error;
      });
  }

  public populateDataForNewItem() {
    this.item = <T>{};
    this.item[this.baseApi.keyName] = this.baseApi.getNewId();
    this.item[this.guidKey] = this.generateGuid();
    this.buildForm();
    this.restoreService.set(this.item);
  }

  public goBack() {
    this.location.back();
  }

  public goToList() {
    this.router.navigate(['./'], { relativeTo: this.activatedRoute.parent });
  }

  public onCancel() {
    this.item = this.restoreService.restoreItem();
    this.goBack();
  }

  public onReset() {
    this.item = this.restoreService.restoreItem();
  }

  public onDelete() {
    let msg = `Do you want to delete this item?`;
    this.modalDialogService.activate(msg).then((responseOK) => {
      if (responseOK) {
        this.isLoading = true;
        this.baseApi.delete(this.id).subscribe(
          (result) => { // success
            this.isLoading = false;
            this.goToList();
          }, (error) => { // failure
            this.isLoading = false;
            this.handleServiceError('Delete', error);
          }, () => console.log('Delete Completed') // finally
        );
      }
    });
  }

  public onValueChanged(data?: any) {
    if (!this.myForm) { return; }
    const form = this.myForm;

    for (const fieldKey in this.formMetaData.properties) {
      if (this.formMetaData.properties.hasOwnProperty(fieldKey)) {
        const control = form.get(fieldKey);

        // clear previous error message
        this.formMetaData.properties[fieldKey]['x-ncg'].errors = [];

        if (control && control.dirty && !control.valid) {
          for (const errorKey in control.errors) {
            if (control.errors.hasOwnProperty(errorKey)) {
              ValidationService.addFormError(this.formMetaData, fieldKey, errorKey, this.customValidationMessages, this.formMetaData);
            }
          }
        }

      }
    }

  }

  public normalizeFormMetaData() {
    for (const fieldKey in this.formMetaData.properties) {
      if (this.formMetaData.properties.hasOwnProperty(fieldKey)) {
        // create default label
        if (this.formMetaData.properties[fieldKey]['x-ncg'].label === undefined) {
          this.formMetaData.properties[fieldKey]['x-ncg'].label = changeCase.titleCase(fieldKey);
        }
        // create default placeholder
        if (this.formMetaData.properties[fieldKey]['x-ncg'].placeholder === undefined) {
          this.formMetaData.properties[fieldKey]['x-ncg'].placeholder = changeCase.lowerCase(changeCase.titleCase(fieldKey), null);
        }
      }
    }
  }

  public onSubmit() {
    this.isSubmitAttempted = true;
    for (let i in this.myForm.controls) {
      if (this.myForm.controls.hasOwnProperty(i)) {
        this.myForm.controls[i].markAsDirty();
        this.myForm.controls[i].updateValueAndValidity();
      }
    }

    //  perform custom validations
    this.customValidate();

    // if form valid, add.
    if (this.myForm.valid) {
      // show busy indicator
      this.busyIndicatorService.show();
      this.isSaving = true;
      this.baseApi.save(this.item, this.isItemEdited)
        .subscribe((item) => {
          this.isSaving = false;
          this.busyIndicatorService.hide();
          this.goToList();
        }, (error) => {
          this.isSaving = false;
          this.busyIndicatorService.hide();
          this.errorMessage = <any>error;
          this.handleServiceError("Save", this.errorMessage);
        });
    }
  }

  public setItemId() {
    this.id = this.activatedRoute.snapshot.params['id'] === 'new' ? null : + this.activatedRoute.snapshot.params['id'];
  }

  private handleServiceError(op: string, err: any) {
    console.error(`${op} error: ${err.message || err}`);
  }

  private convertDateStringToDate(item) {
    for (let key in item) {
      if (item.hasOwnProperty(key)) {
        if (key && item[key].constructor.name === 'String' && this.momentFunction(item[key]).isValid()) {
          item[key] = this.momentFunction(item[key]).format('YYYY-MM-DD');
        }
      }
    }
  }

  private generateGuid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
}

/* NinjaCodeGen.com by DNAfor.NET */
