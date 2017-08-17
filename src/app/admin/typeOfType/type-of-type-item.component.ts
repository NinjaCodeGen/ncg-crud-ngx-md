// angular
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

// api
import { TypeOfType } from './../services/api/models';

// providers/services
import { LocalStorageService, RestoreService, ValidationService } from './../common/services';
import { DataContext } from './../services/api/rest';
import { EntityService, ModalDialogService, BusyIndicatorService, NotifierService } from '../../core';

// components
import { BaseItemComponent } from './../common/components/base-item.component';

// other
import * as moment from 'moment';

@Component({
  selector: 'typeOfTypeItem',
  templateUrl: './type-of-type-item.component.html'
})

export class TypeOfTypeItemComponent extends BaseItemComponent<TypeOfType> {


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
    protected restoreService: RestoreService<TypeOfType>,
    protected routeParams: ActivatedRoute,
    protected router: Router,
    protected validationService: ValidationService
  ) {
    super(titleService,
      datacontextService.TypeOfTypeApi,
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
    this.formMetaData = require('./type-of-type.metaData.json');
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
      
      abbreviation: this.props.abbreviation ? [
          this.props.abbreviation['x-ncg'].defaultValue ? this.props.abbreviation['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.abbreviation['x-ncg'].validations)
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
      
      isActive: this.props.isActive ? [
          this.props.isActive['x-ncg'].defaultValue ? this.props.isActive['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.isActive['x-ncg'].validations)
        )
      ] : null,
      
      key: this.props.key ? [
          this.props.key['x-ncg'].defaultValue ? this.props.key['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.key['x-ncg'].validations)
        )
      ] : null,
      
      concurrencyStamp: this.props.concurrencyStamp ? [
          this.props.concurrencyStamp['x-ncg'].defaultValue ? this.props.concurrencyStamp['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.concurrencyStamp['x-ncg'].validations)
        )
      ] : null,
      
      created: this.props.created ? [
          this.props.created['x-ncg'].defaultValue ? this.props.created['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.created['x-ncg'].validations)
        )
      ] : null,
      
      issuerValue: this.props.issuerValue ? [
          this.props.issuerValue['x-ncg'].defaultValue ? this.props.issuerValue['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.issuerValue['x-ncg'].validations)
        )
      ] : null,
      
      name: this.props.name ? [
          this.props.name['x-ncg'].defaultValue ? this.props.name['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.name['x-ncg'].validations)
        )
      ] : null,
      
      order: this.props.order ? [
          this.props.order['x-ncg'].defaultValue ? this.props.order['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.order['x-ncg'].validations)
        )
      ] : null,
      
      parentID: this.props.parentID ? [
          this.props.parentID['x-ncg'].defaultValue ? this.props.parentID['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.parentID['x-ncg'].validations)
        )
      ] : null,
      
      typeID: this.props.typeID ? [
          this.props.typeID['x-ncg'].defaultValue ? this.props.typeID['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.typeID['x-ncg'].validations)
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
      
      value: this.props.value ? [
          this.props.value['x-ncg'].defaultValue ? this.props.value['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.value['x-ncg'].validations)
        )
      ] : null,
      
      users: this.props.users ? [
          this.props.users['x-ncg'].defaultValue ? this.props.users['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.users['x-ncg'].validations)
        )
      ] : null,
    });
  }

  protected customValidate() {
  }

  protected populateComponentDataAsync() {
  }
}
