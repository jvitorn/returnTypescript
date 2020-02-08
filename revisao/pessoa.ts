namespace empresa{
    class Pessoa{
        //caracteristicas da classe 
        private nome:string | undefined;
        private cpf:string ;
        private idade:number | undefined;
        //criando um construtor
        constructor(cpf:string){
            this.cpf = cpf;


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
        setNome(nome:string):void{
            this.nome = nome;
        }
        setIdade(idade:number):void{
            this.idade = idade;
        }
    }
}