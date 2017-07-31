import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MdIconRegistry, MdDialog } from '@angular/material';
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
    iconRegistry: MdIconRegistry, sanitizer: DomSanitizer, private dialog: MdDialog) {
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
}