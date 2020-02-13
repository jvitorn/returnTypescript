"use strict";
var empresa;
(function (empresa) {
    var p = new empresa.Pessoa("joao", "497.582.852-10");
    p.setIdade(30);
    var mostrarNome = document.getElementById("nome");
    var mostrarIdade = document.getElementById("idade");
    var mostrarCpf = document.getElementById("cpf");
    mostrarNome.textContent = p.getNome();
    mostrarIdade.textContent = p.getIdade().toString();
    mostrarCpf.textContent = p.getCpf();
})(empresa || (empresa = {}));
