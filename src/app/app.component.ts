import { Component } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';


import{ DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  uname = ''; pwd=''; obj = {};
  myData= '';

  constructor(private dataService:DataService){

  }

  myLogin(){
  	this.obj = {
  		"uname": this.uname,
  		"pwd" : this.pwd
  	}
  	this.dataService.myLogin(this.obj).subscribe((data : any) => {
          this.myData = data; 
          console.log('res is ', data);
        }) ;
  }


  showConfig() {
  	this.dataService.getConfig()
	    .subscribe((data : any) => {
          this.myData = data; 
          // Where you find the array res.data or res.data.data
          console.log('res is ', data);
        }) ;
	}
}
