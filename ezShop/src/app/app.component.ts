import { Component, Input, OnInit } from '@angular/core';
import { Personne } from './personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ezShop : le meilleur du shop';
  message = 'Reprenez vos habitudes shopping en main';
}
