import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { CategoriasService } from '../service/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: Categoria[]

  categoriaConsultada: Categoria = new Categoria();

  novaCategoria: Categoria = new Categoria();

  constructor(
    private categoriaService: CategoriasService
  ) { }

  ngOnInit(){
  }

  exibirCategorias(){

    this.categoriaService.pesquisarTodasAsCategorias().subscribe((resp: Categoria[])=>{
      this.categorias = resp;
    })

  }

  exibirCategoriaPorId(id: number){

    this.categoriaService.pesquisarCategoriaPorId(id).subscribe((resp: Categoria) =>{
      this.categoriaConsultada = resp;
    })

  }

  inserirCategoria(){
    this.categoriaService.adicionarCategoria(this.novaCategoria).subscribe((resp: Categoria)=>{
      this.novaCategoria = resp;

      alert('Categoria cadastrada com sucesso');
    })
  }

  editarCategoria(){
    this.categoriaService.adicionarCategoria(this.categoriaConsultada).subscribe((resp: Categoria)=>{
      this.categoriaConsultada = resp;

      alert('Categoria atualizada com sucesso');
    })
  }

  deletarCategoria(id: number){
    this.categoriaService.deletarCategoria(id).subscribe(()=>{
      alert("Categoria deletada com sucesso")
    })
  }


}
