import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ezShop : le meilleur du shop';
  message = 'Reprenez vos habitudes shopping en main';
  image = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  compteur = 0;

  Reset() {
    this.compteur = 0;
    this.AfficherCompteur();
  }

  AjouterUn() {
    this.compteur++;
    this.AfficherCompteur();
  }

  AfficherCompteur() {
    console.log(`Compteur a la valeur ${this.compteur}`);
  }
}
