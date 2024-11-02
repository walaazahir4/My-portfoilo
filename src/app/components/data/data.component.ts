import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [AboutMeComponent],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {

}
