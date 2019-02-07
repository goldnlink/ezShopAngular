import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-details-personne',
  templateUrl: './details-personne.component.html',
  styleUrls: ['./details-personne.component.less']
})
export class DetailsPersonneComponent {
  @Input() personne: Personne;
}
