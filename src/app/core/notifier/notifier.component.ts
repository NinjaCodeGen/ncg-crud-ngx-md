import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotifierService } from './notifier.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'ncg-notifier',
  templateUrl: 'notifier.component.html',
  styleUrls: ['notifier.component.css']
})
export class NotifierComponent implements OnDestroy, OnInit {
  private defaults = {
    title: 'Hey fellow coders!',
    message: `Let's go play with some code!`
  };
  private notifierElement: any;
  private notifierSubscription: Subscription;

  title: string;
  message: string;

  constructor(private notifierService: NotifierService) {
    this.notifierSubscription = this.notifierService.notifierState.subscribe((notifierMessage) => {
      this.notify(notifierMessage.message);
    });
  }

  notify(message = this.defaults.message, title = this.defaults.title) {
    this.title = title;
    this.message = message;
    this.show();
  }

  ngOnInit() {
    this.notifierElement = document.getElementById('notifier');
  }

  ngOnDestroy() {
    this.notifierSubscription.unsubscribe();
  }

  private show() {
    this.notifierElement.style.opacity = 1;
    this.notifierElement.style.zIndex = 9999;

    window.setTimeout(() => this.hide(), 2500);
  }

  private hide() {
    this.notifierElement.style.opacity = 0;
    window.setTimeout(() => this.notifierElement.style.zIndex = 0, 400);
  }
}

/* NinjaCodeGen.com by DNAfor.NET */
