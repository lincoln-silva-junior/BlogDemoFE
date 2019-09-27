import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFormCanDeactivate } from 'src/app/guards/Iform-deactivate';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit, OnDestroy, IFormCanDeactivate {
  categoria: any;
  inscricao: Subscription;
  private formMudou = false;

  constructor(
        private route: ActivatedRoute,
        private router: Router,
        private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      const id = params['id'];

      this.categoria = this.categoriesService.getCategoria(id);
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
    console.log('mudou');
  }

  podeDesativar() {
    if ( this.formMudou) {
      return confirm('Tem certeza que deseja sair da tela?');
    }
    return true;
  }
}
