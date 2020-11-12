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



    // if (this.form.invalid) {
    //   return;
    // }
    
    this.authService.login(this.form.value)
      .subscribe(result => { 
        // console.log(result);
         
      },
      err => {
        
        if (err.status == 401 && err.message) {
          this.form.setErrors({
            credentials: err.error.message,
          });
        } else if (err.status == 422) {
          this.form.setErrors({
            serverErrors: err.error.errors,
          });
        } else if (!err.status) {
          this.form.setErrors({
            noConnection: true,
          });
        } else {
          this.form.setErrors({
            unknownError: true,
          });
        }
      });
  }

}
