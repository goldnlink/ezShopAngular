import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Produit } from '../model/produit';
import { ProduitsService } from '../services/produits.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {
  categoryId: number;
  listeProduits: Array<Produit> = new Array<Produit>();
  constructor(private produitService: ProduitsService, private categoryService: CategoryService) { }


  ngOnDestroy() {
    this.categoryService.resetSelectedCategory();
  }

  ngOnInit() {
    this.categoryService.selectedCategory.subscribe(categoryId => {
      this.categoryId = categoryId;
      this.refreshListe();
    });
  }

  refreshListe() {
    this.produitService.getProduits().subscribe(result => {
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

  onSelectDetail(produitID: number) {
    console.log('ID de produit reçu : ', produitID);
  }
}
