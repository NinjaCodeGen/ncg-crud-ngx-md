import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { BusyIndicatorState, BusyIndicatorService } from './busyIndicator.service';

@Component({
  moduleId: 'module.id',
  selector: 'ncg-busyIndicator',
  templateUrl: 'busyIndicator.component.html',
  styleUrls: ['busyIndicator.component.css']
})
export class BusyIndicatorComponent implements OnDestroy, OnInit {
  visible = false;

  private busyIndicatorStateChanged: Subscription;

  constructor(private busyIndicatorService: BusyIndicatorService) { }

  ngOnInit() {
    this.busyIndicatorStateChanged = this.busyIndicatorService.busyIndicatorState
      .subscribe((state: BusyIndicatorState) => this.visible = state.show);
  }

  ngOnDestroy() {
    this.busyIndicatorStateChanged.unsubscribe();
  }
}

/* NinjaCodeGen.com by DNAfor.NET */
