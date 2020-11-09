import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NameValidators } from '../Validators/name.validators';
import { PasswordValidators } from '../Validators/password.validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^[a-z]{4}[1-9]{4}$'),
      NameValidators.cannotContainSpace
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    confirmPassword: new FormControl('',[
      Validators.required,
    ])
  },
  { validators: PasswordValidators.passwordErrorValidator });

  

  get username(){
    return this.form.get('username');
  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

  constructor() { }

  ngOnInit(): void {
  }

  signUp(){

  }

}
