import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  sendCountry(val: string) {
    // console.log('Hello Arnab: ' + val);
    this.messageEvent.emit(val);
  }
}
