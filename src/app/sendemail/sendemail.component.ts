import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sendemail',
  templateUrl: './sendemail.component.html',
  styleUrls: ['./sendemail.component.scss']
})
export class SendemailComponent implements OnInit {

  name = new FormControl('');


  

  constructor() { }

  ngOnInit(): void {
  }


  send(){
    console.log("Heeeeeeeeeeey");
  }

}
