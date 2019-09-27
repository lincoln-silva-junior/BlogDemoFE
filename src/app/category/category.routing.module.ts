import { CategoryDetalheResolver } from './../guards/category-detalhe.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryDetalheComponent } from './category-detalhe/category-detalhe.component';
import { CategoriesGuard } from '../guards/categories.guard';
import { CategoryDeactivateGuard } from '../guards/category-deactivate.guard';

const categoriesRoutes: Routes = [
    { path: '', component: CategoryComponent,
     canActivateChild: [CategoriesGuard],
        children: [
        { path: 'novo', component: CategoryFormComponent },
        { path: ':id', component: CategoryDetalheComponent,
          resolve: { category : CategoryDetalheResolver} },
        { path: ':id/editar', component: CategoryFormComponent,
          canDeactivate: [CategoryDeactivateGuard] }
    ]}
];

@NgModule ({
    imports: [RouterModule.forChild(categoriesRoutes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule {}
