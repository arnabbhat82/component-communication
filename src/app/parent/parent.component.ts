import {
  Component,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
} from '@angular/core';
import { ShowCountryDirective } from '../show-country.directive';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  message: string;
  @ViewChild(ShowCountryDirective, { static: false })
  showCountry: ShowCountryDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  ngOnInit() {}
  recieveMessage($event) {
    this.message = $event;
  }
}
