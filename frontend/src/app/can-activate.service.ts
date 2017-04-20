import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  Route,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class CanActivateAuthGuard implements CanActivate { 
    
    constructor(private router : Router ){}

    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot){
        
        if(localStorage.getItem("user")){
            return true;
        }
        else{
            console.log("hirehriehriehr");
        this.router.navigate(['/login']);
        return false;
        }
    }
}