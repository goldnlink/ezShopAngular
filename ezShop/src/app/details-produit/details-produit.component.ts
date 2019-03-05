import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.less']
})
export class DetailsProduitComponent implements OnInit {

  @Input()
  produit: Produit;

  constructor() { }

  ngOnInit() {
  }

}
