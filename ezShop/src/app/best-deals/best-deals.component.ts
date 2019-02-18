import { Component, OnInit, OnDestroy } from '@angular/core';
import { Produit } from '../model/produit';
import { ProduitsService } from '../services/produits.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-best-deals',
  templateUrl: './best-deals.component.html',
  styleUrls: ['./best-deals.component.less']
})
export class BestDealsComponent implements OnInit, OnDestroy {

  listeProduits: Array<Produit> = new Array<Produit>();
  categoryId: number;
  constructor(private produitService: ProduitsService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.selectedCategory.subscribe(categoryId => {
      this.categoryId = categoryId;
      this.refreshListe();
    });
    this.refreshListe();
  }

  ngOnDestroy() {
    this.categoryService.resetSelectedCategory();
  }

  refreshListe() {
    this.produitService.getBestDeals().subscribe(result => {
      if (this.categoryId) {
        this.listeProduits = result.filter(produit => produit.categoryId === this.categoryId);
      } else {
        this.listeProduits = result;
      }
    });
  }

  getDetails(produit: Produit) {
    console.log('going to page produits/' + produit.id);
  }
}
