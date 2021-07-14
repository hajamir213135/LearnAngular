import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observer, Subscription } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit,OnDestroy {


  public inntervalsubscribtion: Subscription;
  constructor() { }

  ngOnInit(): void {

    const intervalcount$ = new Observable ((observer: Observer<number>)=>{
      let count = 0;
      setInterval(() => {
        observer.next(count++);
        if( count === 10){
          observer.complete();
        }
      },1000)
    });


    this.inntervalsubscribtion = intervalcount$.subscribe(
      (val) => { console.log(val); },
      () => { console.log("completed!"); },
    );
  }


  ngOnDestroy(){
    this.inntervalsubscribtion.unsubscribe();

  }

}
