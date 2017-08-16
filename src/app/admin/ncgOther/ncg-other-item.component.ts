// angular
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

// api
import { NcgOther } from './../services/api/models';

// providers/services
import { LocalStorageService, RestoreService, ValidationService } from './../common/services';
import { DataContext } from './../services/api/rest';
import { EntityService, ModalDialogService, BusyIndicatorService, NotifierService } from '../../core';

// components
import { BaseItemComponent } from './../common/components/base-item.component';

// other
import * as moment from 'moment';

@Component({
  selector: 'ncgOtherItem',
  templateUrl: './ncg-other-item.component.html'
})

export class NcgOtherItemComponent extends BaseItemComponent<NcgOther> {


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
    protected restoreService: RestoreService<NcgOther>,
    protected routeParams: ActivatedRoute,
    protected router: Router,
    protected validationService: ValidationService
  ) {
    super(titleService,
      datacontextService.NcgOtherApi,
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
    this.formMetaData = require('./ncg-other.metaData.json');
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
      
      valEmailAddressPattern: this.formMetaData.properties.valEmailAddressPattern ? [
          this.formMetaData.properties.valEmailAddressPattern['x-ncg'].defaultValue ? this.formMetaData.properties.valEmailAddressPattern['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.valEmailAddressPattern['x-ncg'].validations)
        )
      ] : null,
      
      valMin0Max100Value: this.formMetaData.properties.valMin0Max100Value ? [
          this.formMetaData.properties.valMin0Max100Value['x-ncg'].defaultValue ? this.formMetaData.properties.valMin0Max100Value['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.valMin0Max100Value['x-ncg'].validations)
        )
      ] : null,
      
      valMin2Max8Length: this.formMetaData.properties.valMin2Max8Length ? [
          this.formMetaData.properties.valMin2Max8Length['x-ncg'].defaultValue ? this.formMetaData.properties.valMin2Max8Length['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.valMin2Max8Length['x-ncg'].validations)
        )
      ] : null,
      
      valRequiredField: this.formMetaData.properties.valRequiredField ? [
          this.formMetaData.properties.valRequiredField['x-ncg'].defaultValue ? this.formMetaData.properties.valRequiredField['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.formMetaData.properties.valRequiredField['x-ncg'].validations)
        )
      ] : null,
    });
  }

  protected customValidate() {
  }

  protected populateComponentDataAsync() {
  }
}
