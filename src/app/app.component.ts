import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  isActive = false;
  constructor() {
    
  }
  ngOnInit(): void {
    // Manejar el clic en el botón de hamburguesa
    $('.navbar-toggler').click(() => {
      $('.navbar-collapse').slideToggle(300);
    });

    // Manejar el clic en los enlaces de menú
    $('.menu-link').click(function() {
      $(this).next('.sub-menu').slideToggle(300);
    });
  }
  showCard() {
    this.isActive = true;
  }
 
}
