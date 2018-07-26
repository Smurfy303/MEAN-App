import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  	configUrl = 'assets/config.json';

	getConfig() {
	  return this.http.get(this.configUrl);
	}


  //Login by using binding values to html
  myLogin(user){
  	return this.http.post("http://localhost:3000/api/login" ,user).map((response: any) => response);

  }


  //Login by using form controls
  getFormControlLogin(login_data){

  	/*return this.http.post("http://localhost:3000/api/login" ,login_data).map((response: any) => {response; 
  		console.log('form action service -->', response)})*/

  	return this.http.post("http://localhost:3000/api/login" ,login_data).map((response: any) => response);
  }


  registerData(reg_data){
    return this.http.post("http://localhost:3000/api/register" , reg_data).map((response: any) => response);
  }

}
