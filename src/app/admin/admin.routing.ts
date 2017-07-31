// angular
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { AdminComponent } from './admin.component';

import { DefaultTypeAndFormatComponent, DefaultTypeAndFormatItemComponent, DefaultTypeAndFormatListComponent } from './defaultTypeAndFormat';
import { DefaultValidationComponent, DefaultValidationItemComponent, DefaultValidationListComponent } from './defaultValidation';
import { NcgOtherComponent, NcgOtherItemComponent, NcgOtherListComponent } from './ncgOther';
import { NcgTypeAndFormatComponent, NcgTypeAndFormatItemComponent, NcgTypeAndFormatListComponent } from './ncgTypeAndFormat';
import { NcgValidationComponent, NcgValidationItemComponent, NcgValidationListComponent } from './ncgValidation';
import { SomeItemComponent, SomeItemItemComponent, SomeItemListComponent } from './someItem';
import { TenantComponent, TenantItemComponent, TenantListComponent } from './tenant';
import { TypeOfTypeComponent, TypeOfTypeItemComponent, TypeOfTypeListComponent } from './typeOfType';
import { UserComponent, UserItemComponent, UserListComponent } from './user';
import { ValidationComponent, ValidationItemComponent, ValidationListComponent } from './validation';

const AdminRoutes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {
        path: 'defaultTypeAndFormat', component: DefaultTypeAndFormatComponent,
        children: [
          { path: '', component: DefaultTypeAndFormatListComponent },
          { path: ':id', component: DefaultTypeAndFormatItemComponent }
        ]
      },
      {
        path: 'defaultValidation', component: DefaultValidationComponent,
        children: [
          { path: '', component: DefaultValidationListComponent },
          { path: ':id', component: DefaultValidationItemComponent }
        ]
      },
      {
        path: 'ncgOther', component: NcgOtherComponent,
        children: [
          { path: '', component: NcgOtherListComponent },
          { path: ':id', component: NcgOtherItemComponent }
        ]
      },
      {
        path: 'ncgTypeAndFormat', component: NcgTypeAndFormatComponent,
        children: [
          { path: '', component: NcgTypeAndFormatListComponent },
          { path: ':id', component: NcgTypeAndFormatItemComponent }
        ]
      },
      {
        path: 'ncgValidation', component: NcgValidationComponent,
        children: [
          { path: '', component: NcgValidationListComponent },
          { path: ':id', component: NcgValidationItemComponent }
        ]
      },
      {
        path: 'someItem', component: SomeItemComponent,
        children: [
          { path: '', component: SomeItemListComponent },
          { path: ':id', component: SomeItemItemComponent }
        ]
      },
      {
        path: 'tenant', component: TenantComponent,
        children: [
          { path: '', component: TenantListComponent },
          { path: ':id', component: TenantItemComponent }
        ]
      },
      {
        path: 'typeOfType', component: TypeOfTypeComponent,
        children: [
          { path: '', component: TypeOfTypeListComponent },
          { path: ':id', component: TypeOfTypeItemComponent }
        ]
      },
      {
        path: 'user', component: UserComponent,
        children: [
          { path: '', component: UserListComponent },
          { path: ':id', component: UserItemComponent }
        ]
      },
      {
        path: 'validation', component: ValidationComponent,
        children: [
          { path: '', component: ValidationListComponent },
          { path: ':id', component: ValidationItemComponent }
        ]
      },
      // set the default path here
      {
        path: '',
        component: DefaultTypeAndFormatComponent
      },
      
      // { path: '',   redirectTo: '/admin/defaultTypeAndFormat', pathMatch: 'full' }
    ]
  }
];

// export const routing: ModuleWithProviders = RouterModule.forChild(AdminRoutes);
@NgModule({
  imports: [RouterModule.forChild(AdminRoutes)], // , { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

export const routedComponents = [AdminComponent
  , DefaultTypeAndFormatComponent, DefaultTypeAndFormatItemComponent, DefaultTypeAndFormatListComponent
  , DefaultValidationComponent, DefaultValidationItemComponent, DefaultValidationListComponent
  , NcgOtherComponent, NcgOtherItemComponent, NcgOtherListComponent
  , NcgTypeAndFormatComponent, NcgTypeAndFormatItemComponent, NcgTypeAndFormatListComponent
  , NcgValidationComponent, NcgValidationItemComponent, NcgValidationListComponent
  , SomeItemComponent, SomeItemItemComponent, SomeItemListComponent
  , TenantComponent, TenantItemComponent, TenantListComponent
  , TypeOfTypeComponent, TypeOfTypeItemComponent, TypeOfTypeListComponent
  , UserComponent, UserItemComponent, UserListComponent
  , ValidationComponent, ValidationItemComponent, ValidationListComponent
];