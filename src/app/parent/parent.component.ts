import {
  Component,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
} from '@angular/core';
import { ShowCountryDirective } from '../show-country.directive';
import { IndiaComponent } from '../india/india.component';
import { PakistanComponent } from '../pakistan/pakistan.component';
import { AfghanistanComponent } from '../afghanistan/afghanistan.component';
import { BangladeshComponent } from '../bangladesh/bangladesh.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  message: string;
  @ViewChild(ShowCountryDirective, { static: false })
  showCountry: ShowCountryDirective;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private router: Router,
  ) {}
  private mappings = {
    India: IndiaComponent,
    Pakistan: PakistanComponent,
    Afghanistan: AfghanistanComponent,
    Bangladesh: BangladeshComponent,
  };
  ngOnInit() {}
  recieveMessage($event) {
    this.message = '/' + $event;
    this.router.navigate([this.message]);
  }
}
