import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndiaComponent } from './india/india.component';
import { PakistanComponent } from './pakistan/pakistan.component';
import { AfghanistanComponent } from './afghanistan/afghanistan.component';
import { BangladeshComponent } from './bangladesh/bangladesh.component';

const routes: Routes = [
  { path: 'india', component: IndiaComponent },
  { path: 'pakistan', component: PakistanComponent },
  { path: 'afghanistan', component: AfghanistanComponent },
  { path: 'bangladesh', component: BangladeshComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
