import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less']
})
export class CategoriesComponent implements OnInit {

  constructor(private serviceCategory: CategoryService) { }
  categories: Category[];
  selectedCategory: number;
  ngOnInit() {
    this.serviceCategory.getCategories().subscribe(result => this.categories = result);
    this.serviceCategory.selectedCategory.subscribe(categoryId => { this.selectedCategory = categoryId; });
  }

  setCategory(categoryId: number) {
    this.serviceCategory.changeSelectedCategory(categoryId);
  }

  resetCategory() {
    this.serviceCategory.resetSelectedCategory();
  }
}
