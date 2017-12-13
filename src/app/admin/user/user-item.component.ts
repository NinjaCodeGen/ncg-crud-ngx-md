// angular
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

// api
import { User } from './../services/api/models';

// providers/services
import { BusyIndicatorService, EntityService, ModalDialogService, NotifierService } from '../../core';
import { LocalStorageService, RestoreService, ValidationService } from './../common/services';
import { DataContext } from './../services/api/rest/data-context.service';

// components
import { BaseItemComponent } from './../common/components/base-item.component';

// other
import * as moment from 'moment';

@Component({
  selector: 'userItem',
  templateUrl: './user-item.component.html'
})

export class UserItemComponent extends BaseItemComponent<User> {
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
    protected restoreService: RestoreService<User>,
    protected routeParams: ActivatedRoute,
    protected router: Router,
    protected validationService: ValidationService
  ) {
    super(titleService,
      datacontextService.UserApi,
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
    this.formMetaData = require('./user.metaData.json');
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
      id: this.formMetaData.properties.id ? [
        this.formMetaData.properties.id['x-ncg'].defaultValue ?
          this.formMetaData.properties.id['x-ncg'].defaultValue : null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.id['x-ncg'].validations)
        )
      ] : null,
      address: this.formMetaData.properties.address ? [
        this.formMetaData.properties.address['x-ncg'].defaultValue ?
          this.formMetaData.properties.address['x-ncg'].defaultValue : null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.address['x-ncg'].validations)
        )
      ] : null,
      age: this.formMetaData.properties.age ? [
        this.formMetaData.properties.age['x-ncg'].defaultValue ?
          this.formMetaData.properties.age['x-ncg'].defaultValue : null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.age['x-ncg'].validations)
        )
      ] : null,
      createdBy: this.formMetaData.properties.createdBy ? [
        this.formMetaData.properties.createdBy['x-ncg'].defaultValue ?
          this.formMetaData.properties.createdBy['x-ncg'].defaultValue : null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.createdBy['x-ncg'].validations)
        )
      ] : null,
      createdDate: this.formMetaData.properties.createdDate ? [
        this.formMetaData.properties.createdDate['x-ncg'].defaultValue ?
          this.formMetaData.properties.createdDate['x-ncg'].defaultValue : null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.createdDate['x-ncg'].validations)
        )
      ] : null,
      emailAddress: this.formMetaData.properties.emailAddress ? [
        this.formMetaData.properties.emailAddress['x-ncg'].defaultValue ?
          this.formMetaData.properties.emailAddress['x-ncg'].defaultValue : null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.emailAddress['x-ncg'].validations)
        )
      ] : null,
      gender: this.formMetaData.properties.gender ? [
        this.formMetaData.properties.gender['x-ncg'].defaultValue ?
          this.formMetaData.properties.gender['x-ncg'].defaultValue : null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.gender['x-ncg'].validations)
        )
      ] : null,
      isActive: this.formMetaData.properties.isActive ? [
        this.formMetaData.properties.isActive['x-ncg'].defaultValue ?
          this.formMetaData.properties.isActive['x-ncg'].defaultValue : null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.isActive['x-ncg'].validations)
        )
      ] : null,
      name: this.formMetaData.properties.name ? [
        this.formMetaData.properties.name['x-ncg'].defaultValue ?
          this.formMetaData.properties.name['x-ncg'].defaultValue : null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.name['x-ncg'].validations)
        )
      ] : null,
      password: this.formMetaData.properties.password ? [
        this.formMetaData.properties.password['x-ncg'].defaultValue ?
          this.formMetaData.properties.password['x-ncg'].defaultValue : null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.password['x-ncg'].validations)
        )
      ] : null,
      phone: this.formMetaData.properties.phone ? [
        this.formMetaData.properties.phone['x-ncg'].defaultValue ?
          this.formMetaData.properties.phone['x-ncg'].defaultValue : null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.phone['x-ncg'].validations)
        )
      ] : null,
      reOrderLevel: this.formMetaData.properties.reOrderLevel ? [
        this.formMetaData.properties.reOrderLevel['x-ncg'].defaultValue ?
          this.formMetaData.properties.reOrderLevel['x-ncg'].defaultValue : null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.reOrderLevel['x-ncg'].validations)
        )
      ] : null,
      tenant: this.formMetaData.properties.tenant ? [
        this.formMetaData.properties.tenant['x-ncg'].defaultValue ?
          this.formMetaData.properties.tenant['x-ncg'].defaultValue : null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.tenant['x-ncg'].validations)
        )
      ] : null,
      tenantId: this.formMetaData.properties.tenantId ? [
        this.formMetaData.properties.tenantId['x-ncg'].defaultValue ?
          this.formMetaData.properties.tenantId['x-ncg'].defaultValue : null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.tenantId['x-ncg'].validations)
        )
      ] : null,
      testString: this.formMetaData.properties.testString ? [
        this.formMetaData.properties.testString['x-ncg'].defaultValue ?
          this.formMetaData.properties.testString['x-ncg'].defaultValue : null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.testString['x-ncg'].validations)
        )
      ] : null,
      uid: this.formMetaData.properties.uid ? [
        this.formMetaData.properties.uid['x-ncg'].defaultValue ?
          this.formMetaData.properties.uid['x-ncg'].defaultValue : null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.uid['x-ncg'].validations)
        )
      ] : null,
      updatedBy: this.formMetaData.properties.updatedBy ? [
        this.formMetaData.properties.updatedBy['x-ncg'].defaultValue ?
          this.formMetaData.properties.updatedBy['x-ncg'].defaultValue : null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.updatedBy['x-ncg'].validations)
        )
      ] : null,
      updatedDate: this.formMetaData.properties.updatedDate ? [
        this.formMetaData.properties.updatedDate['x-ncg'].defaultValue ?
          this.formMetaData.properties.updatedDate['x-ncg'].defaultValue : null,
        Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.updatedDate['x-ncg'].validations)
        )
      ] : null
    });
    
    this.myForm.patchValue(this.item);
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
