import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn } from '@angular/router';

Injectable({
  providedIn:'root'
)
export class AuthGuard implements CanActivate{
  constructor( private auth: AuthServi)
  canActive():boolean{
    return this.auth.estaaAutenticado();
  }
  }
