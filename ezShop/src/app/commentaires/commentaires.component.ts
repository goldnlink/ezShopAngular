import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../model/produit';
import { CommentairesService } from '../services/commentaires.service';
import { Commentaire } from '../model/commentaire';

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.less']
})
export class CommentairesComponent implements OnInit {
  @Input() produit: Produit;
  listeCommentaires: Commentaire[];
  constructor(private commentService: CommentairesService) { }

  ngOnInit() {
    this.listeCommentaires = this.produit.comments;
  }

}
