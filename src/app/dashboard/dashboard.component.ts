import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  new_student_data = [];

  constructor(private router:Router, private studentService:StudentService) { }

  ngOnInit() {
  	 this.getData();
  }

  getData(){
    this.studentService.getStudents().subscribe((data: any) => {
      this.new_student_data = data;
    })
  }

}
