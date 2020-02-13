"use strict";
var empresa;
(function (empresa) {
    var Pessoa = /** @class */ (function () {
        //criando um construtor
        function Pessoa(nome, cpf) {
            this.cpf = cpf;
            this.nome = nome;
        }
        //Mostrar o valor
        Pessoa.prototype.getNome = function () {
            return this.nome;
        };
        Pessoa.prototype.getCpf = function () {
            return this.cpf;
        };
        Pessoa.prototype.getIdade = function () {
            return this.idade;
        };
        //alteração do valor
        Pessoa.prototype.setIdade = function (idade) {
            this.idade = idade;
        };
        return Pessoa;
    }());
    empresa.Pessoa = Pessoa;
})(empresa || (empresa = {}));
