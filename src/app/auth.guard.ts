import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnectionService } from './services/connection.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private connectionService: ConnectionService, private route: Router){}

  canActivate(){
    console.log('triggered');
    if(this.connectionService.isLoggedIn) return true;
    this.route.navigate(['/signIn']);
    return false;
  }
  
}
