import { Component, OnInit } from '@angular/core';
import { observable, Observable, Observer, Subscriber } from 'rxjs';
@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.scss']
})
export class ObsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const interval$ = new Observable((observer: Observer<number>)=>{
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.error(new console.error('Eror in app'));

    });

    interval$.subscribe(
      (val) => { console.log(val) }
    );
  }

}
