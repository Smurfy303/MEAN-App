import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  addStudents(){
  	this.router.navigate(['/add']);
  }

  logout(){
  	this.router.navigate(['/']);
  }

}
