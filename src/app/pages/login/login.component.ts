import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { UsuarioModel } from '../models/usuario.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme=false;
  constructor() { }

  ngOnInit() {
  }
    login( form: NgForm){

      if( form.invalid) {return;}
    Swal.fire({
      allowOutsideClick:false,
      type:'info',
      text: 'Espere por favor...'

    });
    Swal.showLoading();
    this.auth.login(this.usuario)
    .subscribe(resp=>){

      console.log(resp);
      Swal.close();
    },(err) =>{
      console.log(err.error.error.error.message);
      Swal.fire({
        type:'error',
        title: 'error al autenticar',
        text: err.error.error.message
      });
    }

    }
  }
}



