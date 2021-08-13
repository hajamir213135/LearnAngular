import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { EmailService } from '../services/email.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-sentemail',
  templateUrl: './sentemail.component.html',
  styleUrls: ['./sentemail.component.scss'],
})
export class SentemailComponent implements OnInit {
  // emails: { email: string; subject: string; text: string; }[] = [];

  // constructor(private emailService: EmailService) {
  //   this.emails = this.emailService.list();
  //   console.log(this.emailService.list());
  // }

  constructor(private postService: HttpService) {}

  posts: Post[];

  ngOnInit(): void {
    this.postService.list().subscribe((resp) => {
      this.posts = resp;
    });
  }
}
