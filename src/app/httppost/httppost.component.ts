import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../models/post';
import { SentemailComponent } from '../sentemail/sentemail.component';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-httppost',
  templateUrl: './httppost.component.html',
  styleUrls: ['./httppost.component.scss'],
})
export class HttppostComponent implements OnInit {
  postForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    userId: new FormControl('1'),
  });
  constructor(
    private postService: HttpService,
    private sentemail: SentemailComponent
  ) {}

  ngOnInit(): void {}

  handleSubmit() {
    let newPost: Post = this.postForm.value;
    this.postService.create(newPost).subscribe((resp) => {
      console.log(resp);
    });
  }
}
