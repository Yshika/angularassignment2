import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  constructor() {}

  name_array = [];
  gender_array = [];
  email_array = [];
  mobile_array = [];
  category_array = [];
  technology_array = [];
  imageUrl_array = [];

  saveData(name, gender, email, mobile, category, technology, imageUrl) {
    this.name_array.push(name); //will store the name in name_array....
    this.gender_array.push(gender);
    this.email_array.push(email); //will store the name in email_array....
    this.mobile_array.push(mobile); //will store the name in number_array....
    this.category_array.push(category);
    this.technology_array.push(technology);
    this.imageUrl_array.push(imageUrl);
  }
  getName(){
    return this.name_array;
  }
}