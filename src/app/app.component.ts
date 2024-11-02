import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { CardtwoComponent } from './cardtwo/cardtwo.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DataComponent } from './components/data/data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CarouselComponent, CardComponent, FooterComponent, CardtwoComponent, ContactComponent, HomeComponent, AboutMeComponent, NotFoundComponent, DataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'final-project';
}
