import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  NgForm,
  Validators,
  FormArray,
} from '@angular/forms';
import { Router } from '@angular/router';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  imageUrl: string = '/assets/image/fffffff.png';
  fileToUpload: File = null;

  closeResult = '';

  technologies: Array<String> = ['C', 'C++', 'Java', 'Python', 'JavaScript'];
  selectedTechnologies = [];
  selectTechnologyError: Boolean = true;
  name_array = [];
  gender_array = [];
  email_array = [];
  mobile_array = [];
  category_array = [];
  technology_array = [];
  imageUrl_array = [];
  signupForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private modalService: NgbModal,
    private createUserService: SharedServiceService
  ) {}

  //validation starts...
  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z A-Z]*'),
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      gender: new FormControl('female', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern('[0-9]*'),
      ]),
      category: new FormControl('', Validators.required),
      selecttechnology: this.addTechnologiesControls(),
      profilepic: new FormControl('', [
        Validators.required,
        Validators.pattern('.+(jpg|png|jpeg)'),
      ]),
    });
  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  //validation ends...

  //checkbox customvalidation...
  addTechnologiesControls() {
    const arr = this.technologies.map((element) => {
      return this._fb.control(false);
    });

    return this._fb.array(arr);
  }

  get technologiesArray() {
    return <FormArray>this.signupForm.get('selecttechnology');
  }

  getSelectedTechnologies() {
    this.selectedTechnologies = [];
    this.technologiesArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedTechnologies.push(this.technologies[i]);
      }
    });

    this.selectTechnologyError =
      this.selectedTechnologies.length > 0 ? false : true;
  }

  checkTechnologyIsTouched() {
    let flg = false;
    this.technologiesArray.controls.forEach((control) => {
      if (control.touched) {
        flg = true;
      }
    });
    return flg;
  }
  //checkbox customvalidation ends...

  //modal starts...

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  //modal ends...

  showData() {}

  saveData() {
    this.name_array.push(this.signupForm.value.name); //will store the name in name_array....
    this.gender_array.push(this.signupForm.value.gender);
    this.email_array.push(this.signupForm.value.email); //will store the name in email_array....
    this.mobile_array.push(this.signupForm.value.mobile); //will store the name in number_array....
    this.category_array.push(this.signupForm.value.category);
    this.technology_array.push(this.selectedTechnologies);
    this.imageUrl_array.push(this.imageUrl);

    this.createUserService.saveData(this.signupForm.value.name,this.signupForm.value.gender,this.signupForm.value.email,this.signupForm.value.mobile,this.signupForm.value.category,
      this.selectedTechnologies,this.imageUrl);

    localStorage.setItem('name', JSON.stringify(this.name_array));
    localStorage.setItem('gender', JSON.stringify(this.gender_array));
    localStorage.setItem('email', JSON.stringify(this.email_array));
    localStorage.setItem('mobile', JSON.stringify(this.mobile_array));
    localStorage.setItem('category', JSON.stringify(this.category_array));
    localStorage.setItem('technology', JSON.stringify(this.technology_array));
    localStorage.setItem('imageUrl', JSON.stringify(this.imageUrl_array));

    alert('Records has been saved');
  }
}
