import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service'

@Component({
  selector: 'app-testserver',
  templateUrl: './testserver.component.html',
  styleUrls: ['./testserver.component.scss']
})
export class TestserverComponent implements OnInit {

  constructor(private server:ServerService) { }

  ngOnInit(): void {

    this.server.serverlog();
  }

}
