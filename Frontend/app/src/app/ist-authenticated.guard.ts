import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IstAuthenticatedGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router){}


  get getLocalStorage(){
    return !!localStorage.getItem('authenticated');
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
        let isLoggedIn:boolean = this.getLocalStorage;
        if(!isLoggedIn){
          this.router.navigate[('login')];
          return false;
        } else {
          this.router.navigate[('mainpage')];
        }
        return true;
    }
  
}
