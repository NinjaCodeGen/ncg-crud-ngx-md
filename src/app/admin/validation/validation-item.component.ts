// angular
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

// api
import { Validation } from './../services/api/models';

// providers/services
import { LocalStorageService, RestoreService, ValidationService } from './../common/services';
import { DataContext } from './../services/api/rest';
import { EntityService, ModalDialogService, BusyIndicatorService, NotifierService } from '../../core';

// components
import { BaseItemComponent } from './../common/components/base-item.component';

// other
import * as moment from 'moment';

@Component({
  selector: 'validationItem',
  templateUrl: './validation-item.component.html'
})

export class ValidationItemComponent extends BaseItemComponent<Validation> {

  tenantList: any = null;

  @Input() myForm: FormGroup;

  constructor(
    protected datacontextService: DataContext,    
    protected titleService: Title,
    protected entityService: EntityService, 
    protected modalDialogService: ModalDialogService, 
    protected busyIndicatorService: BusyIndicatorService, 
    protected notifierService: NotifierService,
    protected formBuilder: FormBuilder,
    protected location: Location,
    protected restoreService: RestoreService<Validation>,
    protected routeParams: ActivatedRoute,
    protected router: Router,
    protected validationService: ValidationService
  ) {
    super(titleService,
      datacontextService.ValidationApi,
      entityService, 
      modalDialogService, 
      busyIndicatorService, 
      notifierService,
      formBuilder,
      location,
      restoreService,
      routeParams,
      router,
      validationService
    );
  }

  buildForm(): void {
    this.formMetaData = require('./validation.metaData.json');
    this.normalizeFormMetaData();
    this.addFormValidation();

    this.myForm.valueChanges
      .subscribe(
        data => this.onValueChanged(data)
      );

    this.onValueChanged(); // (re)set validation messages now
  }

  private addFormValidation() {
    this.myForm = this.formBuilder.group({
      
      id: this.props.id ? [
          this.props.id['x-ncg'].defaultValue ? this.props.id['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.id['x-ncg'].validations)
        )
      ] : null,
      
      afterDate: this.props.afterDate ? [
          this.props.afterDate['x-ncg'].defaultValue ? this.props.afterDate['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.afterDate['x-ncg'].validations)
        )
      ] : null,
      
      address: this.props.address ? [
          this.props.address['x-ncg'].defaultValue ? this.props.address['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.address['x-ncg'].validations)
        )
      ] : null,
      
      age: this.props.age ? [
          this.props.age['x-ncg'].defaultValue ? this.props.age['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.age['x-ncg'].validations)
        )
      ] : null,
      
      beforeDate: this.props.beforeDate ? [
          this.props.beforeDate['x-ncg'].defaultValue ? this.props.beforeDate['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.beforeDate['x-ncg'].validations)
        )
      ] : null,
      
      containsDPT: this.props.containsDPT ? [
          this.props.containsDPT['x-ncg'].defaultValue ? this.props.containsDPT['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.containsDPT['x-ncg'].validations)
        )
      ] : null,
      
      createdBy: this.props.createdBy ? [
          this.props.createdBy['x-ncg'].defaultValue ? this.props.createdBy['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.createdBy['x-ncg'].validations)
        )
      ] : null,
      
      createdDate: this.props.createdDate ? [
          this.props.createdDate['x-ncg'].defaultValue ? this.props.createdDate['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.createdDate['x-ncg'].validations)
        )
      ] : null,
      
      creditCard: this.props.creditCard ? [
          this.props.creditCard['x-ncg'].defaultValue ? this.props.creditCard['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.creditCard['x-ncg'].validations)
        )
      ] : null,
      
      date: this.props.date ? [
          this.props.date['x-ncg'].defaultValue ? this.props.date['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.date['x-ncg'].validations)
        )
      ] : null,
      
      email: this.props.email ? [
          this.props.email['x-ncg'].defaultValue ? this.props.email['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.email['x-ncg'].validations)
        )
      ] : null,
      
      integer: this.props.integer ? [
          this.props.integer['x-ncg'].defaultValue ? this.props.integer['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.integer['x-ncg'].validations)
        )
      ] : null,
      
      emailAddress: this.props.emailAddress ? [
          this.props.emailAddress['x-ncg'].defaultValue ? this.props.emailAddress['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.emailAddress['x-ncg'].validations)
        )
      ] : null,
      
      gender: this.props.gender ? [
          this.props.gender['x-ncg'].defaultValue ? this.props.gender['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.gender['x-ncg'].validations)
        )
      ] : null,
      
      isActive: this.props.isActive ? [
          this.props.isActive['x-ncg'].defaultValue ? this.props.isActive['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.isActive['x-ncg'].validations)
        )
      ] : null,
      
      name: this.props.name ? [
          this.props.name['x-ncg'].defaultValue ? this.props.name['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.name['x-ncg'].validations)
        )
      ] : null,
      
      password: this.props.password ? [
          this.props.password['x-ncg'].defaultValue ? this.props.password['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.password['x-ncg'].validations)
        )
      ] : null,
      
      phone: this.props.phone ? [
          this.props.phone['x-ncg'].defaultValue ? this.props.phone['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.phone['x-ncg'].validations)
        )
      ] : null,
      
      startsWithDPT: this.props.startsWithDPT ? [
          this.props.startsWithDPT['x-ncg'].defaultValue ? this.props.startsWithDPT['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.startsWithDPT['x-ncg'].validations)
        )
      ] : null,
      
      string: this.props.string ? [
          this.props.string['x-ncg'].defaultValue ? this.props.string['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.string['x-ncg'].validations)
        )
      ] : null,
      
      reOrderLevel: this.props.reOrderLevel ? [
          this.props.reOrderLevel['x-ncg'].defaultValue ? this.props.reOrderLevel['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.reOrderLevel['x-ncg'].validations)
        )
      ] : null,
      
      tenant: this.props.tenant ? [
          this.props.tenant['x-ncg'].defaultValue ? this.props.tenant['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.tenant['x-ncg'].validations)
        )
      ] : null,
      
      tenantId: this.props.tenantId ? [
          this.props.tenantId['x-ncg'].defaultValue ? this.props.tenantId['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.tenantId['x-ncg'].validations)
        )
      ] : null,
      
      testString: this.props.testString ? [
          this.props.testString['x-ncg'].defaultValue ? this.props.testString['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.testString['x-ncg'].validations)
        )
      ] : null,
      
      uid: this.props.uid ? [
          this.props.uid['x-ncg'].defaultValue ? this.props.uid['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.uid['x-ncg'].validations)
        )
      ] : null,
      
      updatedBy: this.props.updatedBy ? [
          this.props.updatedBy['x-ncg'].defaultValue ? this.props.updatedBy['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.updatedBy['x-ncg'].validations)
        )
      ] : null,
      
      updatedDate: this.props.updatedDate ? [
          this.props.updatedDate['x-ncg'].defaultValue ? this.props.updatedDate['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.updatedDate['x-ncg'].validations)
        )
      ] : null,
      
      url: this.props.url ? [
          this.props.url['x-ncg'].defaultValue ? this.props.url['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.url['x-ncg'].validations)
        )
      ] : null,
      
      zip: this.props.zip ? [
          this.props.zip['x-ncg'].defaultValue ? this.props.zip['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.zip['x-ncg'].validations)
        )
      ] : null,
    });
  }

  protected customValidate() {
  }

  protected populateComponentDataAsync() {
    this.populateTenantData();
  }
    
  // private methods populateTenantData
  private populateTenantData() {
   this.datacontextService.TenantApi
     .get()
     .subscribe((tenantlistWithCount) => {
        // TODO: this.tenantIsLoading = true;
        this.tenantList = tenantlistWithCount.list;
      },
      (error) => { this.errorMessage = <any>error; });
  }
  
}
