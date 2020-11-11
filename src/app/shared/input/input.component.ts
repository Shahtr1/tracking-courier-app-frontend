import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() label: string;
  @Input() label_id: string;
  @Input() input_type: string;
  @Input() control: FormControl;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

  showErrors() {
    const { touched, errors } = this.control;
    return touched && errors;
  }

  getErrorMessage(){
    
    if(this.control.hasError('required')){
      return this.label + ' is required';
    }

    if(this.control.hasError('email')){
      return 'Please enter a valid email address!';
    }

    if (this.control.hasError("minlength")){
      return this.label + ' should be minimum ' + this.control.errors.minlength.requiredLength + ' characters.';
    }

    if(this.control.hasError('cannotContainSpace')){
      return this.label + ' cannot contain space.';
    }

    if(this.control.hasError('pattern')){
      return this.label + ' should match pattern(' + this.title + ')';
    }





  }



}
