import { Component, OnInit } from '@angular/core';
import { HttppostService } from '../httppost.service';

@Component({
  selector: 'app-httppost',
  templateUrl: './httppost.component.html',
  styleUrls: ['./httppost.component.scss']
})
export class HttppostComponent implements OnInit {

  constructor( private server:HttppostService) { }

  ngOnInit(): void {
  }


}
