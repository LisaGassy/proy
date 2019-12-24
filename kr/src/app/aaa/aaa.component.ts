import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aaa',
  templateUrl: './aaa.component.html',
  styleUrls: ['./aaa.component.css']
})
export class AaaComponent implements OnInit {
  login: string;
  password: string;
  entered: boolean;
  constructor() { }

  ngOnInit() {
    this.login = 'admin1'
    this.password = 'admin2'
    this.entered = false
  }
  MakeLogin() {
    if (this.login === 'admin' && this.password === 'admin') {
      console.log('all ok');
      this.entered = true
    }
    else if (this.login !== 'admin' && this.password !== 'admin') {
      const pas = localStorage.getItem('password')
      const log = localStorage.getItem('login');
      if (log === this.login && pas === this.password) {
        console.log('all ok');
        this.entered = true
      }

      else {
        this.entered = false;
        localStorage.setItem('login', this.login);
        localStorage.setItem('password', this.password);
      }
    }
  }
}