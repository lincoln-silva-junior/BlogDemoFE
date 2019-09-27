import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from './category';
import { CategoriesService } from './../category/categories.service';

@Injectable()
export class CategoryDetalheResolver implements Resolve<Category> {
    constructor(private categoriesService: CategoriesService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {

        const id = route.params['id'];

        return this.categoriesService.getCategoria(id);

    }
}
