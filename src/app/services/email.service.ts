import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {emails} from './emails';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {
  }

  send(email: { email: string; subject: string; text: string}) {
    emails.push(email);
  }

  list(): [] {
    return emails;
  }
}
