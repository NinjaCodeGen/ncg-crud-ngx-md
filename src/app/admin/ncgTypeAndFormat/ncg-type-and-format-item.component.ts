// angular
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

// api
import { NcgTypeAndFormat } from './../services/api/models';

// providers/services
import { LocalStorageService, RestoreService, ValidationService } from './../common/services';
import { DataContext } from './../services/api/rest';
import { EntityService, ModalDialogService, BusyIndicatorService, NotifierService } from '../../core';

// components
import { BaseItemComponent } from './../common/components/base-item.component';

// other
import * as moment from 'moment';

@Component({
  selector: 'ncgTypeAndFormatItem',
  templateUrl: './ncg-type-and-format-item.component.html'
})

export class NcgTypeAndFormatItemComponent extends BaseItemComponent<NcgTypeAndFormat> {


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
    protected restoreService: RestoreService<NcgTypeAndFormat>,
    protected routeParams: ActivatedRoute,
    protected router: Router,
    protected validationService: ValidationService
  ) {
    super(titleService,
      datacontextService.NcgTypeAndFormatApi,
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
    this.formMetaData = require('./ncg-type-and-format.metaData.json');
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
          this.formMetaData.properties.id['x-ncg'].defaultValue ? this.formMetaData.properties.id['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.id['x-ncg'].validations)
        )
      ] : null,
      
      someArray: this.formMetaData.properties.someArray ? [
          this.formMetaData.properties.someArray['x-ncg'].defaultValue ? this.formMetaData.properties.someArray['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.someArray['x-ncg'].validations)
        )
      ] : null,
      
      someBoolean: this.formMetaData.properties.someBoolean ? [
          this.formMetaData.properties.someBoolean['x-ncg'].defaultValue ? this.formMetaData.properties.someBoolean['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.someBoolean['x-ncg'].validations)
        )
      ] : null,
      
      someIntegerInt32: this.formMetaData.properties.someIntegerInt32 ? [
          this.formMetaData.properties.someIntegerInt32['x-ncg'].defaultValue ? this.formMetaData.properties.someIntegerInt32['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.someIntegerInt32['x-ncg'].validations)
        )
      ] : null,
      
      someNumber: this.formMetaData.properties.someNumber ? [
          this.formMetaData.properties.someNumber['x-ncg'].defaultValue ? this.formMetaData.properties.someNumber['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.someNumber['x-ncg'].validations)
        )
      ] : null,
      
      someNumberDouble: this.formMetaData.properties.someNumberDouble ? [
          this.formMetaData.properties.someNumberDouble['x-ncg'].defaultValue ? this.formMetaData.properties.someNumberDouble['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.someNumberDouble['x-ncg'].validations)
        )
      ] : null,
      
      someString: this.formMetaData.properties.someString ? [
          this.formMetaData.properties.someString['x-ncg'].defaultValue ? this.formMetaData.properties.someString['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.someString['x-ncg'].validations)
        )
      ] : null,
      
      someStringDateTime: this.formMetaData.properties.someStringDateTime ? [
          this.formMetaData.properties.someStringDateTime['x-ncg'].defaultValue ? this.formMetaData.properties.someStringDateTime['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.someStringDateTime['x-ncg'].validations)
        )
      ] : null,
      
      someStringUid: this.formMetaData.properties.someStringUid ? [
          this.formMetaData.properties.someStringUid['x-ncg'].defaultValue ? this.formMetaData.properties.someStringUid['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.someStringUid['x-ncg'].validations)
        )
      ] : null,
      
      itemNotDisplayed: this.formMetaData.properties.itemNotDisplayed ? [
          this.formMetaData.properties.itemNotDisplayed['x-ncg'].defaultValue ? this.formMetaData.properties.itemNotDisplayed['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.itemNotDisplayed['x-ncg'].validations)
        )
      ] : null,
      
      itemNotGenerated: this.formMetaData.properties.itemNotGenerated ? [
          this.formMetaData.properties.itemNotGenerated['x-ncg'].defaultValue ? this.formMetaData.properties.itemNotGenerated['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.itemNotGenerated['x-ncg'].validations)
        )
      ] : null,
      
      listNotDisplayed: this.formMetaData.properties.listNotDisplayed ? [
          this.formMetaData.properties.listNotDisplayed['x-ncg'].defaultValue ? this.formMetaData.properties.listNotDisplayed['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.listNotDisplayed['x-ncg'].validations)
        )
      ] : null,
      
      listNotGenerated: this.formMetaData.properties.listNotGenerated ? [
          this.formMetaData.properties.listNotGenerated['x-ncg'].defaultValue ? this.formMetaData.properties.listNotGenerated['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.listNotGenerated['x-ncg'].validations)
        )
      ] : null,
      
      orderAThird: this.formMetaData.properties.orderAThird ? [
          this.formMetaData.properties.orderAThird['x-ncg'].defaultValue ? this.formMetaData.properties.orderAThird['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.orderAThird['x-ncg'].validations)
        )
      ] : null,
      
      orderBSecond: this.formMetaData.properties.orderBSecond ? [
          this.formMetaData.properties.orderBSecond['x-ncg'].defaultValue ? this.formMetaData.properties.orderBSecond['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.orderBSecond['x-ncg'].validations)
        )
      ] : null,
      
      orderCFirst: this.formMetaData.properties.orderCFirst ? [
          this.formMetaData.properties.orderCFirst['x-ncg'].defaultValue ? this.formMetaData.properties.orderCFirst['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.orderCFirst['x-ncg'].validations)
        )
      ] : null,
      
      withTitleDescDefaultMetaData: this.formMetaData.properties.withTitleDescDefaultMetaData ? [
          this.formMetaData.properties.withTitleDescDefaultMetaData['x-ncg'].defaultValue ? this.formMetaData.properties.withTitleDescDefaultMetaData['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.withTitleDescDefaultMetaData['x-ncg'].validations)
        )
      ] : null,
    });
  }

  protected customValidate() {
  }

  protected populateComponentDataAsync() {
  }
}
