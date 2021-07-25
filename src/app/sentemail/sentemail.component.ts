import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-sentemail',
  templateUrl: './sentemail.component.html',
  styleUrls: ['./sentemail.component.scss']
})
export class SentemailComponent implements OnInit {

  emails: { email: string; subject: string; text: string; }[] = [];

  constructor(private emailService: EmailService) {
    this.emails = this.emailService.list();
    console.log(this.emailService.list());
  }

  ngOnInit(): void { 
  }

}
