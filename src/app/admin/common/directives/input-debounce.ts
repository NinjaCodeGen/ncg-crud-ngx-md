// angular
import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

// 3rd party
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'input-debounce',
  template: '<input type="text" class="form-control" [placeholder]="placeholder" [(ngModel)]="inputValue" />'
})
export class InputDebounceComponent implements OnInit {
  @Input() placeholder: string;
  @Input() set delay(interval: number) {
    this.timeDelay = interval || this.timeDelay;
  }
  @Output() value: EventEmitter<{}> = new EventEmitter();

  public inputValue: string;
  private timeDelay = 300;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.eventSubcribe();
  }

  private eventSubcribe() {
    const eventStream = Observable.fromEvent(this.elementRef.nativeElement, 'keyup')
      .map(() => this.inputValue)
      .debounceTime(this.timeDelay)
      .distinctUntilChanged();

    eventStream.subscribe(input => this.value.emit(input));
  }
}

/* NinjaCodeGen.com by DNAfor.NET */
