import { Categoria } from "./Categoria";
import { EntradaSaida } from "./EntradaSaida";

export class Estoque{

    public id: number;
    public sku: string;
    public nome: string;
    public quantidade: number;
    public valorUnit: number;
    public valorTotal: number;
    public leadtime: number;
    public tempoEntraga: number;
    public tempoConsumoPadrao: number;
    public comEstoqueSeguranca: boolean;
    public observacao: string;

    public movimentacao: EntradaSaida[];
    public categoria: Categoria;

}