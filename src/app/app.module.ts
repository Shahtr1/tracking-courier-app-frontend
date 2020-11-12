import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './Auth/login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Auth/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    // RouterModule.forRoot([
    //   { path: '', component: HomeComponent }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
