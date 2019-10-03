import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-testing-form',
  templateUrl: './testing-form.component.html',
  styleUrls: ['./testing-form.component.scss']
})
export class TestingFormComponent implements OnInit {

  createdUser = { name: '', human: false, sex: ''};

  submitted = false;

  nameFormControl = new FormControl(this.createdUser.name,
    [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20)
    ]);
    
  humanFormControl = new FormControl (this.createdUser.human,
    [
      Validators.required
    ]);

  sexFormControl = new FormControl (this.createdUser.sex,
    [
      Validators.required
    ]);

  userForm: FormGroup;
  
  onSubmit() {
    this.FormData.saveUser(this.userForm.value);
    this.submitted = true;
  }

  getUser() {
    this.FormData.getUser();
  }

  constructor(private FormData: FormDataService) {
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
        'name': this.nameFormControl,
        'human': this.humanFormControl,
        'sex': this.sexFormControl       
      });
    }

  getErrorMessage() {
    return this.nameFormControl.hasError('required') ? 'You must enter a name' :
      this.nameFormControl.hasError('minlength') ? "Name can't be a single letter" :
      this.nameFormControl.hasError('maxlength') ? "That's not a real name now is it?" :
        '';
  }
  
}
