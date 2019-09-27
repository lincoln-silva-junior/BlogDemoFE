import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from './../categories.service';
import { Category } from 'src/app/guards/category';

@Component({
  selector: 'app-category-detalhe',
  templateUrl: './category-detalhe.component.html',
  styleUrls: ['./category-detalhe.component.css']
})
export class CategoryDetalheComponent implements OnInit, OnDestroy {
  categoria: Category;
  inscricao: Subscription;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private categoriesService: CategoriesService) { }

  ngOnInit() {
    /*this.inscricao = this.route.params.subscribe((params: any) => {
      const id = params['id'];

      this.categoria = this.categoriesService.getCategoria(id);
    });*/
    this.inscricao = this.route.data.subscribe (
      (info: {category: Category}) => {
        console.log(info);
        this.categoria = info.category;
      }
    );
  }

  editarCategoria() {
    this.router.navigate(['/categories', this.categoria.id, 'editar']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
