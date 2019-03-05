import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produit } from '../model/produit';
import { environment } from 'src/environments/environment';

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
    return this.httpClient.get<Produit[]>(environment.urlApi + 'products', {headers: this.headers});
  }

  getBestDeals() {
    return this.httpClient.get<Produit[]>(environment.urlApi + 'products/bestdeals', {headers: this.headers});
  }
}
