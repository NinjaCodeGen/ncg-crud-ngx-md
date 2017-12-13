import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog, MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuItems } from './../admin/admin.menu';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  templateUrl: './admin-layout.component.html',
  styles: [`:host {
  display: flex;
  flex: 1;
}`]
})

export class AdminLayoutComponent {
  isDarkTheme = false;
  url = 'https://ninjacodegen.com/';

  constructor(private router: Router, public menuItems: MenuItems, public translate: TranslateService,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dialog: MatDialog) {
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
}
