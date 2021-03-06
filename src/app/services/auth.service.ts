import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private route: Router) { }

  isLoggedIn: boolean;

  signUp(credentials){
    console.log(credentials );
    
    return this.http.post('http://localhost:8000/api/v1/admin/signup'
      , credentials)
    .pipe(
      map(response => {
        console.log('success');
        
      })
    );
  }

  login(credentials){
    console.log(credentials);
    
    return this.http.post('http://localhost:8000/api/v1/admin/login'
      , credentials)
    .pipe(
      map(response => {
        console.log('success');
        this.isLoggedIn = true;
        this.route.navigate(['/enquiries']);
      })
    );
  }
}
