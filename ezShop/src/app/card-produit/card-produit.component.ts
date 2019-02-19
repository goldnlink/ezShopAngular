import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-card-produit',
  templateUrl: './card-produit.component.html',
  styleUrls: ['./card-produit.component.less']
})
export class CardProduitComponent implements OnInit {
  @Input() produit: Produit;
  @Output() selectDetail = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  getDetails(produit: Produit) {
    this.selectDetail.emit(produit.id);
  }

}
