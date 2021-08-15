import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/Login';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  
  logar(usuario: Login): Observable<Login>{
    return this.http.post<Login>("http://localhost:8080/usuarios/logar", usuario)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>("http://localhost:8080/usuarios/cadastrar", usuario)
  }
  
}
