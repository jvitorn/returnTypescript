namespace empresa{
    export class Empresa{
        private nomeEmpresa : string;
        private atividade : string;
        private cidade : string;
        private clientes : Array<Cliente> = [];
        private funcionarios : Array<Funcionario> = [];

        getCidade():string{
            return this.cidade;
        }
        getCliente(){
            return this.clientes;
        }
        getNomeEmpresa():string{
            return this.nomeEmpresa;
        }
       
        getAtividade():string{
            return this.atividade;
        }
        setAtividade(atividade:string):void{
            this.atividade = atividade;
        }
        setCidade(cidade:string):void{
            this.cidade = cidade;
        }
        setNomeEmpresa(nome:string):void{
            this.nomeEmpresa = nome;
        }
       
       
        addCliente(cliente:Cliente):void{
            this.clientes.push(cliente);
        }
        
        addFuncionario(funcionario:Funcionario):void{
            this.funcionarios.push(funcionario);
        }
        getFuncionario(){
            return this.funcionarios;
        }
    }
}