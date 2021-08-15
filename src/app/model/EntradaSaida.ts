import { Estoque } from "./Estoque";
import { Usuario } from "./Usuario";

export class EntradaSaida{

    public id: number;
    public entrada: number;
    public saida: number;
    public data: Date;

    public estoque: Estoque;
    public usuarios: Usuario[]
    
}