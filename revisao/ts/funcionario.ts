namespace empresa{
    export class Funcionario extends Pessoa{
        private codFuncionario :number| undefined;
        private valorDia : number| undefined;

        constructor(nome:string,cpf:string,cod:number){
            super(nome,cpf);
            this.codFuncionario = cod ;
        }
        getCodFuncionario():number|undefined{
            return this.codFuncionario;
        }
        getValorDia():number|undefined{
            return this.valorDia;
        }
        setCodFuncionario(codFuncionario :number):void{
            this.codFuncionario = codFuncionario;
        }
        setValorDia(valorDia:number):void{
            this.valorDia = valorDia;
        }
        calcularSalario():number{
            return this.valorDia*30;
        }
    }
}