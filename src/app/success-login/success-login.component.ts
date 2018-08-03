import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-success-login',
  templateUrl: './success-login.component.html',
  styleUrls: ['./success-login.component.css']
})
export class SuccessLoginComponent implements OnInit {
  editStudent: any;
  constructor(private router:Router , private studentService:StudentService) {
    this.editStudent = studentService.editData;
   }

  studentForm : FormGroup;
  message : '';
  button_label = "Add Student Form";
  action = "add";
  email_label = false;

  ngOnInit() {

  	this.studentForm = new FormGroup ({
  		sfname : new FormControl(),
  		slname : new FormControl(),
  		semail : new FormControl(),
      susername: new FormControl('',Validators.required),
      spassword: new FormControl(),
    });

    if(this.editStudent != undefined){

        this.studentForm.patchValue({
          sfname: this.editStudent.sfname,
          slname : this.editStudent.slname,
          semail: this.editStudent.semail,
          susername: this.editStudent.susername,
          spassword: this.editStudent.spassword,
        });

         this.button_label = "Update Student Form";
         this.action="update";
         //this.email_label = true;

    }

  }

  myStudentAddFormControl(stud_data, action){

    if(action == "add"){

      this.studentService.storeStudents(stud_data).subscribe((data:any) => {
          if(data.status == 200){
           // this.message = data.msg;
           this.router.navigate(['/crud']);
          }else{
            this.message = data.msg;
          }
    });

    }else{

       this.studentService.updateStudent(stud_data).subscribe((data:any) => {
          if(data.status == 200){
           // this.message = data.msg;
           this.router.navigate(['/crud']);
          }else{
            this.message = data.msg;
          }
      });
    }

  
  }

  openHomePage(){
  	this.router.navigate(['/crud']);
  }

}
