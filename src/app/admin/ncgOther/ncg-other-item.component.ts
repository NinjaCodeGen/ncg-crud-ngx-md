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
      
      id: this.props.id ? [
          this.props.id['x-ncg'].defaultValue ? this.props.id['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.id['x-ncg'].validations)
        )
      ] : null,
      
      itemNotDisplayed: this.props.itemNotDisplayed ? [
          this.props.itemNotDisplayed['x-ncg'].defaultValue ? this.props.itemNotDisplayed['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.itemNotDisplayed['x-ncg'].validations)
        )
      ] : null,
      
      itemNotGenerated: this.props.itemNotGenerated ? [
          this.props.itemNotGenerated['x-ncg'].defaultValue ? this.props.itemNotGenerated['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.itemNotGenerated['x-ncg'].validations)
        )
      ] : null,
      
      listNotDisplayed: this.props.listNotDisplayed ? [
          this.props.listNotDisplayed['x-ncg'].defaultValue ? this.props.listNotDisplayed['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.listNotDisplayed['x-ncg'].validations)
        )
      ] : null,
      
      listNotGenerated: this.props.listNotGenerated ? [
          this.props.listNotGenerated['x-ncg'].defaultValue ? this.props.listNotGenerated['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.listNotGenerated['x-ncg'].validations)
        )
      ] : null,
      
      orderAThird: this.props.orderAThird ? [
          this.props.orderAThird['x-ncg'].defaultValue ? this.props.orderAThird['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.orderAThird['x-ncg'].validations)
        )
      ] : null,
      
      orderBSecond: this.props.orderBSecond ? [
          this.props.orderBSecond['x-ncg'].defaultValue ? this.props.orderBSecond['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.orderBSecond['x-ncg'].validations)
        )
      ] : null,
      
      orderCFirst: this.props.orderCFirst ? [
          this.props.orderCFirst['x-ncg'].defaultValue ? this.props.orderCFirst['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.orderCFirst['x-ncg'].validations)
        )
      ] : null,
      
      withTitleDescDefaultMetaData: this.props.withTitleDescDefaultMetaData ? [
          this.props.withTitleDescDefaultMetaData['x-ncg'].defaultValue ? this.props.withTitleDescDefaultMetaData['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.withTitleDescDefaultMetaData['x-ncg'].validations)
        )
      ] : null,
      
      valEmailAddressPattern: this.props.valEmailAddressPattern ? [
          this.props.valEmailAddressPattern['x-ncg'].defaultValue ? this.props.valEmailAddressPattern['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.valEmailAddressPattern['x-ncg'].validations)
        )
      ] : null,
      
      valMin0Max100Value: this.props.valMin0Max100Value ? [
          this.props.valMin0Max100Value['x-ncg'].defaultValue ? this.props.valMin0Max100Value['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.valMin0Max100Value['x-ncg'].validations)
        )
      ] : null,
      
      valMin2Max8Length: this.props.valMin2Max8Length ? [
          this.props.valMin2Max8Length['x-ncg'].defaultValue ? this.props.valMin2Max8Length['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.valMin2Max8Length['x-ncg'].validations)
        )
      ] : null,
      
      valRequiredField: this.props.valRequiredField ? [
          this.props.valRequiredField['x-ncg'].defaultValue ? this.props.valRequiredField['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.valRequiredField['x-ncg'].validations)
        )
      ] : null,
    });
  }

  protected customValidate() {
  }

  protected populateComponentDataAsync() {
  }
}
