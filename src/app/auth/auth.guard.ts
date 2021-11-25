import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService){}

  //Método realiza a verificação se há token no local storage.
  checkIfUserHasToken(){
    return localStorage.getItem('token')
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //Irá realizar o método acima e caso não haja token é direcionado para tela de login.
      const shouldProceed = Boolean(this.checkIfUserHasToken());
      if(shouldProceed) return true
      return this.router.navigate(['login'])
  }
  
}
