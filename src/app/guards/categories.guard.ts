import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class CategoriesGuard implements CanActivateChild {

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log(route);
        console.log(state);

        if (state.url.includes('editar')) {
            /*alert('Usuário sem acesso!');
            // return false;
            return of(false);*/
        }

        return true;
    }
}
