import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { GalleryComponent } from './gallery/gallery.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from "./card/card.component";
import { FooterComponent } from './footer/footer.component';
import { AudioComponent } from './audio/audio.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, GalleryComponent, CarouselComponent, CardComponent, FooterComponent, AudioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'ciao-mondo';
  navtitle = "BiagioShop";
  rootAngular = 'https://angular.io/guide/architecture#root-angular-module';
  pills = [
    {
      title: 'Angular',
      description: 'Angular is a platform for building mobile and desktop web applications.',
      link: 'https://angular.io'
    },
    {
      title: 'Angular CLI',
      description: 'The Angular CLI is a command line interface tool that helps to automate your development workflow.',
      link: 'https://angular.io/cli'
    },
    {
      title: 'Angular Material',
      description: 'Angular Material is a UI component library for Angular developers.',
      link: 'https://material.angular.io'
    }
  ]
}
