import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-testing-form',
  templateUrl: './testing-form.component.html',
  styleUrls: ['./testing-form.component.scss']
})
export class TestingFormComponent implements OnInit {

  saveForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.saveForm = this.formbuilder.group({
      name: [''],
      human: [''], 
      sex: [''] 
    });
   }

  ngOnInit() {
  }

  

}
