"use strict";
var empresa;
(function (empresa) {
    var Pessoa = /** @class */ (function () {
        //criando um construtor
        function Pessoa(cpf) {
            this.cpf = cpf;
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
        Pessoa.prototype.setNome = function (nome) {
            this.nome = nome;
        };
        Pessoa.prototype.setIdade = function (idade) {
            this.idade = idade;
        };
        return Pessoa;
    }());
})(empresa || (empresa = {}));
