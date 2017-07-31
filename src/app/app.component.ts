import { Component } from '@angular/core';
import { MdIconRegistry, MdDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styles: [`
  :host {
  display: flex;
  flex: 1;
}

md-sidenav {
  width: 320px;
}

.content {
  padding: 12px;
}

/deep/ md-icon.avatar {
  overflow: hidden;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin: 12px;
}

/deep/ .mat-list-item-content {
  height: auto !important;
}`]
})
export class AppComponent {
  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer, private dialog: MdDialog) {
  }
}