import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
name="Vik"
@Input() userName:string;
_useage:number;
@Input()
set useage(age:number){
  if (age<0){
    this._useage=0
  }
  else if (age>100){
    this._useage=100
  }
  else{
    this._useage=age
  }
}
get useage(){
  return this._useage;
}
  constructor() { }

  ngOnInit() {
  }

}
