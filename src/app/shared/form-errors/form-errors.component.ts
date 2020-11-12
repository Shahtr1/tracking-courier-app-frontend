import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.css']
})
export class FormErrorsComponent implements OnInit {

  objectValues = Object.values;

  @Input() errors: any;

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage(){
    
    if (this.errors.email){
      return this.errors.email;
    }

    if (this.errors.passwordsDontMatch){
      return this.errors.passwordsDontMatch;
    }

    if(this.errors.credentials){
      console.log(this.errors.credentials);
      
      return this.errors.credentials;
    }

  }

}
