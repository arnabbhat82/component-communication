import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { ShowCountryDirective } from './show-country.directive';
import { IndiaComponent } from './india/india.component';
import { PakistanComponent } from './pakistan/pakistan.component';
import { AfghanistanComponent } from './afghanistan/afghanistan.component';
import { BangladeshComponent } from './bangladesh/bangladesh.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ShowCountryDirective,
    IndiaComponent,
    PakistanComponent,
    AfghanistanComponent,
    BangladeshComponent,
  ],
  entryComponents: [
    IndiaComponent,
    PakistanComponent,
    AfghanistanComponent,
    BangladeshComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
