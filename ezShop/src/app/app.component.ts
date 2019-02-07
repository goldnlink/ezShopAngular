import { Component } from '@angular/core';
import { Personne } from './personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ezShop : le meilleur du shop';
  message = 'Reprenez vos habitudes shopping en main';
  image = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  protected personnes: Personne[] = [];
  constructor() {
    this.personnes.push(new Personne(1, 'Le Gonidec', 'Aurelien', 36, 'M'));
    this.personnes.push(new Personne(2, 'Doe', 'Jane', 20, 'F'));
    this.personnes.push(new Personne(3, 'Doe', 'John', 50, 'M'));
  }
}
