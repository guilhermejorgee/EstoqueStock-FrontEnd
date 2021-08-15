import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Estoque } from '../model/Estoque';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(
    private http: HttpClient
  ) { }

  

  pesquisarTodosMateriais(): Observable<Estoque[]>{
    return this.http.get<Estoque[]>("http://localhost:8080/estoque", {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  pesquisarMateriaisPorId(id: number): Observable<Estoque>{
    return this.http.get<Estoque>(`http://localhost:8080/estoque/${id}`, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  pesquisarMateriaisPorNome(nome: string): Observable<Estoque>{
    return this.http.get<Estoque>(`http://localhost:8080/estoque/nome/${nome}`, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  pesquisarMateriaisPorValorUnit(valor: number): Observable<Estoque>{
    return this.http.get<Estoque>(`http://localhost:8080/estoque/valorunit/${valor}`, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  valorConsumoPadrao(id: number): Observable<number>{
    return this.http.get<number>(`http://localhost:8080/estoque/consumopadrao/${id}`, {headers: new HttpHeaders().set('Authorization', environment.token)})

  }

  estoqueSegPadrao(id: number): Observable<number>{
    return this.http.get<number>(`http://localhost:8080/estoque/estsegpadrao/${id}`, {headers: new HttpHeaders().set('Authorization', environment.token)})

  }

  tempoPedComSeg(id: number): Observable<number>{
    return this.http.get<number>(`http://localhost:8080/estoque/tempopedidocomseg/${id}`, {headers: new HttpHeaders().set('Authorization', environment.token)})

  }

  tempoPedSemSeg(id: number): Observable<number>{
    return this.http.get<number>(`http://localhost:8080/estoque/tempopedidosemseg/${id}`, {headers: new HttpHeaders().set('Authorization', environment.token)})

  }

  adicionarMaterial(estoque: Estoque, idUsuario: number): Observable<Estoque>{
    return this.http.post<Estoque>(`http://localhost:8080/estoque/${idUsuario}`, estoque, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  adicionarQtdClick(id: number, idUsuario: number): Observable<Estoque>{
    return this.http.put<Estoque>(`http://localhost:8080/estoque/addquantidadebotao/${id}/usuario/${idUsuario}`, null, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  retirarQtdClick(id: number, idUsuario: number): Observable<Estoque>{
    return this.http.put<Estoque>(`http://localhost:8080/estoque/rttquantidadebotao/${id}/usuario/${idUsuario}`, null, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  adicionarQtdDig(id: number, idUsuario: number, quantidade: number): Observable<Estoque>{
    return this.http.put<Estoque>(`http://localhost:8080/estoque/addquantidadedig/${id}/usuario/${idUsuario}/qtd/${quantidade}`, null, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  retirarQtdDig(id: number, idUsuario: number, quantidade: number): Observable<Estoque>{
    return this.http.put<Estoque>(`http://localhost:8080/estoque/rttquantidadedig/${id}/usuario/${idUsuario}/qtd/${quantidade}`, null, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  atualizarCaracteristicas(estoque: Estoque): Observable<Estoque>{
    return this.http.put<Estoque>("http://localhost:8080/estoque", estoque, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  deletarMaterial(id: number){
    return this.http.delete(`http://localhost:8080/estoque/${id}`, {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

}
