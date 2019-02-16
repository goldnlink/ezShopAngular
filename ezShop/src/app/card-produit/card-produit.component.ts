import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-card-produit',
  templateUrl: './card-produit.component.html',
  styleUrls: ['./card-produit.component.less']
})
export class CardProduitComponent implements OnInit {
  @Input() produit: Produit;
  constructor() { }

  ngOnInit() {
  }

}
