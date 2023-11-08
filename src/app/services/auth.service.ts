import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../pages/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
private apikey = 'AIzaSyCZOnUmj_Huy2MtPEf080xeX5g62VveWbY'
userToken:string;
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor(private http: HttpClient) {

    this.leerToken();
  }

  logout(){
localStorage.removeItem('token')

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
    return this.http.post(
      `${ this.url }/signupNewUser?Key=${ this.apikey }`,
    ).pipe(
      map(resp =>){
console.log('Entro en el mapa del RXJS');
this.guardarToken(resp[idToken]);
  return resp;

      })

    };
    }
    private guardarToken( idToken: string){
this.userToken=idToken;
localStorage.setItem('token,idToken');
    }
    leerToken(){
      if(localStorage.getItem('token')){
this.userToken= localStorage.getItem('token');
      }else{
        this.userToken='';
      }
      return this.userToken;

    estaAutenticando():boolean{
      return this.userToken.length>2;
    }
    }
  }



