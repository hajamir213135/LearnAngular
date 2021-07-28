import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpService } from '../services/http.service';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  data= [];  
  constructor(private HttpService:HttpClient) { }

  ngOnInit(): void {
    this.HttpService.get().subscribe((ret: any[])=>{
      console.log(ret);
      this.data = ret;
    })  
   }
  }

}
