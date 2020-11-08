import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NameValidators } from '../Validators/name.validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form = new FormGroup({
    
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^[a-z]{4}[1-9]{4}$'),
      NameValidators.cannotContainSpace
    ],
    ),

    

  });

  constructor() { }

  ngOnInit(): void {
  }

  signUp(){

  }

}
