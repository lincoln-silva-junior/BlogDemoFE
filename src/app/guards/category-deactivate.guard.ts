import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryFormComponent } from './../category/category-form/category-form.component';
import { IFormCanDeactivate } from './Iform-deactivate';

@Injectable()
export class CategoryDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
    canDeactivate(
        component: IFormCanDeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log('guarda de desativação');

        return component.podeDesativar();
    }
}
