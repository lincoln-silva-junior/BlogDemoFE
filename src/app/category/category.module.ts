import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoryComponent } from './category.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryRoutingModule } from './category.routing.module';
import { CategoryDetalheComponent } from './category-detalhe/category-detalhe.component';
import { CategoriesService } from './categories.service';
import { FormsModule } from '@angular/forms';
import { CategoryDeactivateGuard } from '../guards/category-deactivate.guard';
import { CategoryDetalheResolver } from './../guards/category-detalhe.resolver';

@NgModule({
    imports: [
        CommonModule,
        CategoryRoutingModule,
        FormsModule
    ],
    exports: [],
    declarations: [
                    CategoryComponent,
                    CategoryFormComponent,
                    CategoryDetalheComponent
                  ],
    providers: [
                CategoriesService,
                CategoryDeactivateGuard,
                CategoryDetalheResolver
                ],
})
export class CategoryModule { }
