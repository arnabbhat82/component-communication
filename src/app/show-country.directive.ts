import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowCountry]',
})
export class ShowCountryDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
