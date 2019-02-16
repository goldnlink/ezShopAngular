import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';
import { ProduitsService } from '../services/produits.service';

@Component({
  selector: 'app-best-deals',
  templateUrl: './best-deals.component.html',
  styleUrls: ['./best-deals.component.less']
})
export class BestDealsComponent implements OnInit {
  listeProduits: Array<Produit> = new Array<Produit>();
  constructor(private produitService: ProduitsService) { }

  ngOnInit() {
    this.produitService.getBestDeals().subscribe(result => this.listeProduits = result);
  }

  getDetails(produit: Produit) {
    console.log('going to page produits/' + produit.id);
  }
}
