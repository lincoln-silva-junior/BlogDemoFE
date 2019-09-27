import { CategoriesService } from './categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  private categories: any[] = [];

  constructor(private categoriesService: CategoriesService) {

   }

  ngOnInit() {
    this.categories = this.categoriesService.getCategorias();
  }

}
