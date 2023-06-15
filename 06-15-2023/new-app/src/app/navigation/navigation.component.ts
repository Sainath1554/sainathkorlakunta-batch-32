import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  logIn = true;
  content = 'Log In';
  onClick() {
    this.logIn = !this.logIn;
    this.content = this.logIn ? 'Log Out' : 'Log In';
  }
}
