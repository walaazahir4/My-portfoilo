import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { CardtwoComponent } from '../../cardtwo/cardtwo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CardtwoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
