import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn';
  selectitem = 'Book';
  items = ['item1' , 'item2']
  additempush(newitem : string){
    this.items.push(newitem);
  }








}