import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.less']
})
export class PanierComponent implements OnInit {
  listeProduits: Produit[];
  prixTotal: number;
  constructor(private cartService: CartService) {
    this.listeProduits = new Array<Produit>();
  }

  ngOnInit() {
    this.cartService.listeProduits.subscribe(liste => {
      this.listeProduits = liste;
      if (this.listeProduits) {
        this.prixTotal = this.listeProduits.reduce(function(prev, cur) {
          return prev + cur.price;
        }, 0);
      }
    });
  }

  enleverProduit(produit: Produit) {
    this.cartService.enleverProduit(produit);
  }
}
