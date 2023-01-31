import { trigger } from '@angular/animations';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this._isLoggedIn$.asObservable();
  
    constructor() {
      const token = localStorage.getItem('profanis_auth');
      this._isLoggedIn$.next(!!token);
    }
  
    public login(username: string, password: string) {
        this._isLoggedIn$.next(true);
        if(username == "test@test.at" && password == "test"){   
            localStorage.setItem('username', username);
            localStorage.setItem('authenticated', "true");
            return true;
        }
        return false;
    }
}