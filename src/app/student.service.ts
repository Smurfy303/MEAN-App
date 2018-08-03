import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  editData: any;
  constructor(private http:HttpClient) { }

  storeStudents(stud_data){

  	return this.http.post("http://localhost:3000/api/addStudData" , stud_data).map((response : any) =>
  		response );
  }

  getStudents(){
  	return this.http.get("http://localhost:3000/api/getStudData").map((response: any) => 
  		response);
  }

  editStudData(stud_id){

  	return this.http.get("http://localhost:3000/api/editStudent/"+stud_id).map((response:any) =>{
      //  debugger;
      this.editData = response[0]});
  }

  deleteStudent(stud_id) {

    return this.http.delete("http://localhost:3000/api/deleteStudent/"+stud_id).map((response:any) => response);
  }

  updateStudent(stud_data){
    
    return this.http.post("http://localhost:3000/api/updateStudent",stud_data).map((response:any) => response);
    }

  

}
