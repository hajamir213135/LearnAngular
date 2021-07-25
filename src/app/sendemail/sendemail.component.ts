import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-sendemail',
  templateUrl: './sendemail.component.html',
  styleUrls: ['./sendemail.component.scss']
})
export class SendemailComponent implements OnInit {

  emailForm = new FormGroup({
    email: new FormControl(''),
    subject: new FormControl(''),
    text: new FormControl(''),
  });

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    console.log(this.emailForm.value);
    this.emailService.send(this.emailForm.value);
  }
}
