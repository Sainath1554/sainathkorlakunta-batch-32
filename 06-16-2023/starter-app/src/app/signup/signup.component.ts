import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  phone = '';
  dob = '';
  profile: Boolean = false;
  logIn: Boolean = false;
  signUpForm: Boolean = true;
  signUp() {
    alert('You have been signedup');
    this.logIn = true;
    this.signUpForm = false;
  }
  logInButton() {
    alert('Logged in successfully');
    this.logIn = false;
    this.profile = true;
  }
}
