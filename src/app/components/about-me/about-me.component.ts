import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { DataComponent } from '../data/data.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CardComponent, DataComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
