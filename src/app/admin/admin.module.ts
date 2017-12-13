// angular
import { NgModule } from '@angular/core';

// providers/services
import { ServiceModule } from './services/service.module';
import { AdminCommonModule } from './common/admin-common.module';

// routing
import { AdminRoutingModule, routedComponents } from './admin.routing';

@NgModule({
  declarations: [routedComponents],
  imports: [AdminCommonModule.forRoot(), AdminRoutingModule, ServiceModule],
  entryComponents: [routedComponents]
})

export class AdminModule { }
