import { Component,OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  title = 'my-app';
  ngOnInit() { console.log('Oninit'); }
  ngOnChanges() { console.log("OnInit"); }
  ngDoCheck() { console.log('DoCheck'); }
  ngAfterContentInit() { console.log('AfterContentInit'); }
  ngAfterContentChecked() { console.log('AfterContentChecked'); }
  ngAfterViewInit() { console.log('AfterViewInit'); }
  ngAfterViewChecked() { console.log('AfterViewChecked'); }
  ngOnDestroy() { console.log('OnDestroy'); }

    }

