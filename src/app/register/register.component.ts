import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import {Router} from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router , private dataService:DataService) { }

  registerForm : FormGroup;
  message : '';

  ngOnInit() {

  	this.registerForm = new FormGroup ({
  		fname : new FormControl(),
  		lname : new FormControl(),
  		email : new FormControl(),
        username: new FormControl('',Validators.required),
        password: new FormControl(),
    });

  }


  myRegisterFormControl(register_data){

  	this.dataService.registerData(register_data).subscribe((reg_data : any) => {

  		if(reg_data.status == 200){
  			this.router.navigate(['/login']);
  		}else{
  			this.message = reg_data.msg;
  			//this.router.navigate(['/register']);
  		}
  	})

  }
 
  openHomePage(){
  	this.router.navigate(['/']);
  }

}
