import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(
    private http: HttpClient
  ) { }

  pesquisarTodasAsCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>("http://localhost:8080/categorias", {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  pesquisarCategoriaPorId(id: number): Observable<Categoria>{
    return this.http.get<Categoria>(`http://localhost:8080/categorias/${id}`, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  pesquisarPorDescricao(descricao: String): Observable<Categoria>{
    return this.http.get<Categoria>(`http://localhost:8080/categorias/descricao/${descricao}`, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  adicionarCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>("http://localhost:8080/categorias", categoria, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  atualizarCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>("http://localhost:8080/categorias", categoria, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  deletarCategoria(id: Number){
    return this.http.delete(`"http://localhost:8080/categorias/${id}`, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  }

