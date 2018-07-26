import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-login',
  templateUrl: './success-login.component.html',
  styleUrls: ['./success-login.component.css']
})
export class SuccessLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  logout(){
  	this.router.navigate(['/']);
  }
}
