namespace empresa{
    export class Filial{
        private cidade:string;
        private codFilial:number;
        private empresa:Empresa;

        getCidade():string{
            return this.cidade;
        }
        setCidade():void{
            this.cidade;
        }
    }
}