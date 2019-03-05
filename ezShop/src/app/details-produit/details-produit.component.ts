import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Produit } from '../model/produit';
import { ProduitsService } from '../services/produits.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.less']
})
export class DetailsProduitComponent implements OnInit {
  produit: Produit;

  constructor(private productService: ProduitsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduit(id).subscribe(product => this.produit = product);
  }
}
