import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, Router, ActivatedRouteSnapshot, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
              private authService: AuthService,
              private router: Router) { }

  canActivate(
              route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot
              ): Observable<boolean> | boolean {

              console.log('AuthGuard');

              return this.verificarAcesso();

              }

  verificarAcesso(): boolean | Observable<boolean> {
    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }


  canLoad(
          route: Route
         ): Observable<boolean> | Promise<boolean> | boolean {

      console.log('CanLoad');

      return this.verificarAcesso();
    }
}
