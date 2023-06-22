import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
})
export class AppHeaderComponent implements OnInit {
  showText: any;
  isLogin = false;
  @Input() flag: boolean = true;
  constructor(private router: Router, private aService: AuthService) {}

  ngOnChanges() {}

  ngOnInit() {}
  toggleMenu() {
    this.showText = !this.showText;
  }
  onLogOut() {
    if (this.aService.isLoggedIn === true) {
      this.aService.isLoggedIn = false;
      this.router.navigate(['/login']);
    }
  }
}
