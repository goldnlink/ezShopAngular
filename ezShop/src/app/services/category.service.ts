import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category';
import { environment } from 'src/environments/environment.prod';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private httpClient: HttpClient) { }
  private categorySource = new BehaviorSubject<number>(null);
  selectedCategory = this.categorySource.asObservable();

  getCategories() {
    return this.httpClient.get<Category[]>(environment.urlApi + 'categories');
  }

  changeSelectedCategory(categoryId: number) {
    this.categorySource.next(categoryId);
  }

  resetSelectedCategory() {
    this.categorySource.next(null);
  }
}
