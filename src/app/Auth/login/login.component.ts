import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  constructor( 
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.form.value)
      .subscribe(result => { 
        // console.log(result);
         
      },
      err => {
        this.form.setErrors(err.error.errors);
      });
  }

}
