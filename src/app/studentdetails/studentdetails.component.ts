import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
Students:Student[];
searchValue:string;
  constructor( private httpClient:HttpClient) { }

  ngOnInit() {
  
  this.httpClient.get('/assets/Students.json').subscribe((result:Student[])=>{
    this.Students=result;
  });
  }
}
