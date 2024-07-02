import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  closeSubmenus() {
    const subMenus = document.querySelectorAll('.dropdown-menu.show');
    subMenus.forEach(subMenu => {
      subMenu.classList.remove('show');
    });
  }
}
