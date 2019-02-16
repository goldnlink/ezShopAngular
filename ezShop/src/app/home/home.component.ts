import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';
import { Observable } from 'rxjs';
import { ProduitsService } from '../services/produits.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  listeProduits: Array<Produit> = new Array<Produit>();
  constructor(private produitService: ProduitsService) { }

  ngOnInit() {
    this.produitService.getProduits().subscribe(result => this.listeProduits = result);
  }

  getDetails(produit: Produit) {
    console.log('going to page produits/' + produit.id);
  }
}
