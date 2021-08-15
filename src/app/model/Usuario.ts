import { EntradaSaida } from "./EntradaSaida";

export class Usuario{

    public id: number;
    public usuario: string;
    public senha: string;
    public tipo: boolean;
    public foto: string;

    public movimentacoes: EntradaSaida[];

}