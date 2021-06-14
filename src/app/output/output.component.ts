import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() itemout = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  additem(value : string) {
    this.itemout.emit(value);
  }

}
