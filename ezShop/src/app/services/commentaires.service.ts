import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category';
import { environment } from 'src/environments/environment.prod';
import { BehaviorSubject } from 'rxjs';
import { Commentaire } from '../model/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentairesService {

  constructor(private httpClient: HttpClient) { }

  getAllComments(productID: number) {
    return this.httpClient.get<Commentaire[]>(environment.urlApi + 'comments/' + productID);
  }
}
