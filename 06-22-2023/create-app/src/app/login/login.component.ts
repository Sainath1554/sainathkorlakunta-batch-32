import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginInfo = {
    email: '',
    pwd: '',
  };
  constructor(private router: Router, private aService: AuthService) {}

  ngOnInit() {
    console.log('aService', this.aService.isLoggedIn);
  }
  onLogin() {
    if (this.loginInfo.email === 'a@a.com' && this.loginInfo.pwd === '12345') {
      console.log('user Authenticatesd');
      this.aService.isLoggedIn = true;
      this.router.navigate(['/profile']);
    } else {
      console.log('user NOT Authenticatesd');
      this.aService.isLoggedIn = false;
      alert('InValid details!!!');
    }
  }
}
