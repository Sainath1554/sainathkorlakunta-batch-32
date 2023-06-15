import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  logIn = true;
  content = 'Log In';
  onClick() {
    this.logIn = !this.logIn;
    this.content = this.logIn ? 'Log Out' : 'Log In';
  }
}
