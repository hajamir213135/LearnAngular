import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-httpc',
  templateUrl: './httpc.component.html',
  styleUrls: ['./httpc.component.scss']
})
export class HttpcComponent implements OnInit {
  url='https://jsonplaceholder.typicode.com/users';
  items=[];
  constructor( private http:HttpClient) {
    this.http.get(this.url).toPromise().then(data =>{
      console.log(data);

      for ( let value in data )
        if(data.hasOwnProperty(value))
          this.items.push(data[value]);      
    })
   }

  ngOnInit(): void {
  }

}
