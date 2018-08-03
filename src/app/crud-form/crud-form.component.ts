import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { StudentService } from '../student.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent implements OnInit {

  constructor(private router:Router, private studentService:StudentService) { }

  student_data = [];
  
  ngOnInit() {

    this.getData();

  }

  getData(){
    this.studentService.getStudents().subscribe((data: any) => {
      this.student_data = data;
    })
  }

  addStudents(){
  	this.router.navigate(['/add']);
  }

  logout(){
  	this.router.navigate(['/']);
  }

  editStudentForm(stud_id){

    this.studentService.editStudData(stud_id).subscribe((data:any) => {

      this.router.navigate(['/add']);

    })
  }

  deleteStudent(stud_id){

    swal({
        title: "Are you sure?",
        text: "Once deleted, Are you sure want to delete Student!",
        icon: "warning",
        //buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
         
          this.studentService.deleteStudent(stud_id).subscribe((data:any) => {
            if(data){
              swal("Yes! Student deleted Successfully...!", { });
              this.getData();
              //this.router.navigate(['/crud']);
            }
        })
      };
  });

}

}
