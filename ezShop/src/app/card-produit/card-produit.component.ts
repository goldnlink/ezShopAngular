import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produit } from '../model/produit';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-card-produit',
  templateUrl: './card-produit.component.html',
  styleUrls: ['./card-produit.component.less']
})
export class CardProduitComponent implements OnInit {
  @Input() produit: Produit;
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  ajouterProduit(produit: Produit) {
    this.cartService.ajouterUnProduit(produit);
  }
}
