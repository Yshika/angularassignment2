import { Component, OnInit } from '@angular/core';
import { ProfileDetails } from 'src/app/shared-service.service';
@Component({
  selector: 'app-view-all-user',
  templateUrl: './view-all-user.component.html',
  styleUrls: ['./view-all-user.component.css'],
})
export class ViewAllUserComponent implements OnInit {
  name_array = [];
  gender_array = [];
  email_array = [];
  mobile_array = [];
  category_array = [];
  technology_array = [];
  imageUrl_array = [];

  constructor(private viewUser: ProfileDetails) {}

  public ngOnInit(): void {
    this.name_array = this.viewUser.getData('name');
    this.gender_array = this.viewUser.getData('gender');
    this.email_array = this.viewUser.getData('email');
    this.mobile_array = this.viewUser.getData('mobile');
    this.category_array = this.viewUser.getData('category');
    this.technology_array = this.viewUser.getData('technology');
    this.imageUrl_array = this.viewUser.getData('imageUrl');
  }
}
