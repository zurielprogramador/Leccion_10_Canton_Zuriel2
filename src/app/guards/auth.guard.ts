import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn } from '@angular/router';

Injectable({
  providedIn:'root'
)
export class AuthGuard implements CanActivate{
  constructor( private auth: AuthServi,
    private router:Router){}

  canActive():boolean{
    if(this.auth.estaAutenticando()){
      return true;
    }
    return this.auth.estaaAutenticado();
  }
  }
