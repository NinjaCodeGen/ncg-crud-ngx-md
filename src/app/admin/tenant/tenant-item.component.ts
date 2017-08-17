// angular
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

// api
import { Tenant } from './../services/api/models';

// providers/services
import { LocalStorageService, RestoreService, ValidationService } from './../common/services';
import { DataContext } from './../services/api/rest';
import { EntityService, ModalDialogService, BusyIndicatorService, NotifierService } from '../../core';

// components
import { BaseItemComponent } from './../common/components/base-item.component';

// other
import * as moment from 'moment';

@Component({
  selector: 'tenantItem',
  templateUrl: './tenant-item.component.html'
})

export class TenantItemComponent extends BaseItemComponent<Tenant> {


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
    protected restoreService: RestoreService<Tenant>,
    protected routeParams: ActivatedRoute,
    protected router: Router,
    protected validationService: ValidationService
  ) {
    super(titleService,
      datacontextService.TenantApi,
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
    this.formMetaData = require('./tenant.metaData.json');
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
