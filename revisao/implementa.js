"use strict";
var empresa;
(function (empresa) {
    //definindo uma nova pessoa 
    var p = new empresa.Pessoa("joao", "497.582.852-10");
    p.setIdade(30);
    //capturando elementos por id
    var mostrarNome = document.getElementById("nome");
    var mostrarIdade = document.getElementById("idade");
    var mostrarCpf = document.getElementById("cpf");
    mostrarNome.textContent = p.getNome();
    mostrarIdade.textContent = p.getIdade().toString();
    mostrarCpf.textContent = p.getCpf();
    //--------------------------------------------------------------------------------------------------------------------------------------------------
    var c = new empresa.Cliente('Wellington Orelha', "120.120.120.00", 120);
    c.setIdade(50);
    c.setLimite(3000);
    c.setSaldo(2000);
    var nomeCliente = document.getElementById('nomeC');
    var cpfCliente = document.getElementById('cpfC');
    var idadeCliente = document.getElementById('idadeC');
    var codigoCliente = document.getElementById('codC');
    var limiteCliente = document.getElementById('limiteC');
    var saldoCliente = document.getElementById('saldoC');
    nomeCliente.textContent = c.getNome();
    cpfCliente.textContent = c.getCpf();
    idadeCliente.textContent = c.getIdade().toString();
    codigoCliente.textContent = c.getCodCliente().toString();
    limiteCliente.textContent = c.getLimite().toString();
    saldoCliente.textContent = c.getSaldo().toString();
})(empresa || (empresa = {}));
