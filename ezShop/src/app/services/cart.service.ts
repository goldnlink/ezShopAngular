import { Injectable } from '@angular/core';
import { Produit } from '../model/produit';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private userCartSource = new BehaviorSubject<Produit[]>(null);
  listeProduits = this.userCartSource.asObservable();
  private _listeProduits = new Array<Produit>();
  constructor() { }

  ajouterUnProduit(produit: Produit) {
    this._listeProduits.push(produit);
    this.userCartSource.next(this._listeProduits);
    console.log('length : ', this._listeProduits.length);
  }

  viderPanier() {
    this._listeProduits = new Array<Produit>();
    this.userCartSource.next(this._listeProduits);
  }

  enleverProduit(produit: Produit) {
    this._listeProduits = this._listeProduits.filter(item => item.id !== produit.id);
    this.userCartSource.next(this._listeProduits);
  }
}
