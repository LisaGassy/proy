import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aaa',
  templateUrl: './aaa.component.html',
  styleUrls: ['./aaa.component.css']
})
export class AaaComponent implements OnInit {
  login:string;
  password:string;
  constructor() { }

  ngOnInit() {
    this.login='admin1'
    this.password='admin2'
  }
  MakeLogin(){
    if(this.login === 'admin' && this.password==='admin'){
      console.log('all ok');
  }
  }
}
