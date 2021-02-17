import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';
@Component({
  selector: 'app-view-all-user',
  templateUrl: './view-all-user.component.html',
  styleUrls: ['./view-all-user.component.css']
})
export class ViewAllUserComponent implements OnInit {

  

  name1_array =[];
  name="";
  gender="";
  email="";
  mobile="";
  category="";
  technology="";
  imageUrl="";
  constructor(private viewUser: SharedServiceService) { }

  public ngOnInit(): void {
    
    this.showDataFromLocalStorage();
    this.name1_array = this.viewUser.getName();
    console.log("name array",this.name1_array);

  }

  showDataFromLocalStorage(){
    this.name = localStorage.getItem('name') ? JSON.parse(localStorage.getItem('name')) : []
    this.gender = localStorage.getItem('gender') ? JSON.parse(localStorage.getItem('gender')) : []
    this.email = localStorage.getItem('email') ? JSON.parse(localStorage.getItem('email')) : []
	  this.mobile = localStorage.getItem('mobile') ? JSON.parse(localStorage.getItem('mobile')) : []
    this.category= localStorage.getItem('category') ? JSON.parse(localStorage.getItem('category')) : []
    this.technology= localStorage.getItem('technology') ? JSON.parse(localStorage.getItem('technology')) : []
    this.imageUrl= localStorage.getItem('imageUrl') ? JSON.parse(localStorage.getItem('imageUrl')) : []

  }
  
}
