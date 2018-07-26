import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';


@Component({
  selector: 'app-success-login',
  templateUrl: './success-login.component.html',
  styleUrls: ['./success-login.component.css']
})
export class SuccessLoginComponent implements OnInit {

  constructor(private router:Router) { }

  studentForm : FormGroup;
  message : '';

  ngOnInit() {

  	this.studentForm = new FormGroup ({
  		sfname : new FormControl(),
  		slname : new FormControl(),
  		semail : new FormControl(),
      susername: new FormControl('',Validators.required),
      spassword: new FormControl(),
    });

  }

  myStudentAddFormControl(stud_data){

  	console.log('Stud data is :', stud_data);
  }

  openHomePage(){
  	this.router.navigate(['/crud']);
  }

}
