import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../personne';
import { MatFormField, MatInput } from '@angular/material';

@Component({
  selector: 'app-details-personne',
  templateUrl: './details-personne.component.html',
  styleUrls: ['./details-personne.component.less']
})
export class DetailsPersonneComponent implements OnInit {
  @Input() personne: Personne;
  constructor() { }

  ngOnInit() {
  }

}
