import { Component, AfterViewInit, HostListener, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements AfterViewInit {
  
  swiper3: Swiper | null = null; // Swiper para el segundo conjunto de cartas
  constructor() { }
  ngAfterViewInit() {
    this.initThirdSwiper();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (this.swiper3 !== null) {
      this.swiper3.destroy();
      this.initThirdSwiper();
    }
  }


  initThirdSwiper() {
    const isMobile = window.innerWidth <= 767;
    this.swiper3 = new Swiper('.mySwiper3', {
      slidesPerView: isMobile ? 1 : 3,
      
      loop: true,
     
      autoplay: {
        delay: 3000
      }
    });
  }

}
