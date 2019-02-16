import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produit } from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  headers: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Origin', '*');
   }

  getProduits() {
    return this.httpClient.get<Produit[]>('http://localhost:63893/api/products', {headers: this.headers});
  }

  getBestDeals() {
    return this.httpClient.get<Produit[]>('http://localhost:63893/api/products/bestdeals', {headers: this.headers});
  }
}
