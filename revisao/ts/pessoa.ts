namespace empresa{
    export class Pessoa{
        //caracteristicas da classe 
        private nome:string | undefined;
        private cpf:string ;
        private idade:number | undefined;
        //criando um construtor
        constructor(nome:string,cpf:string){
            this.cpf = cpf;
            this.nome = nome;

        }
        //Mostrar o valor
        getNome():string  | undefined{
            return this.nome;
        }
        getCpf():string | undefined{
            return this.cpf;
        }
        getIdade():number | undefined{
            return  this.idade;
        }
        //alteração do valor
        setIdade(idade:number):void{
            this.idade = idade;
        }
    }
}