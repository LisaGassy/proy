import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  pi:number=2048
  wi:string="Ah wi morkovki"
  constructor() { }

  ngOnInit() {
  }

}
