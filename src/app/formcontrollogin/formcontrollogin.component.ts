import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import {Router} from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-formcontrollogin',
  templateUrl: './formcontrollogin.component.html',
  styleUrls: ['./formcontrollogin.component.css']
})
export class FormcontrolloginComponent implements OnInit {

  constructor(private dataService:DataService ,  private router: Router) { }

  loginForm : FormGroup;
  response = {};
  message = '';

  ngOnInit() {

  	this.loginForm = new FormGroup ({
        username: new FormControl('',Validators.required),
        password: new FormControl()
    });
  }


  myLoginFormControl(login_data){

  	this.dataService.getFormControlLogin(login_data).subscribe((data : any) => {
  		this.response = data;

  		if(data.status == 200){
        //Shows dashboard to edit details via FormControl
  			this.router.navigate(['/crud']);

        //Shows new Dashboard to edit details via @Input
        this.router.navigate(['/dashboard']);
        
  		}else{
        this.message = data.msg;
        //this.router.navigate(['/']);
      }

  	})

  }

  openHomePage(){

    this.router.navigate(['/']);
  }

}
