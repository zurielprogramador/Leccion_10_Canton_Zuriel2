import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../pages/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
private apikey = 'AIzaSyCZOnUmj_Huy2MtPEf080xeX5g62VveWbY'
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor(private http: HttpClient) { }

  logout(){


  }
  login(usuario:UsuarioModel){
    const authData={
      email:usuario.email,
      password: usuario.password,
      returnSecureToken:true

    };
    return this.http.post{
      `${ this.url }/signupNewUser?Key=${ this.apikey }`,
      authData


  }
  nuevoUsuario(usuario:UsuarioModel){

    const anthData={
      email:usuario.email,
      password: usuario.password,
      returnSecureToken:true
    };
    return this.http.post{
      `${ this.url }/signupNewUser?Key=${ this.apikey }`,
      authData
    };
    }
  }

