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
    // --------------------------------------------------------------------------------------------------------------------------------------------
    var f = new empresa.Funcionario("Claudio Dollynho", "458.589.478-58", 456);
    f.setIdade(32);
    f.setValorDia(100);
    var nomeFuncionario = document.getElementById('nomeF');
    var codigoFuncionario = document.getElementById('codF');
    var cpfFuncionario = document.getElementById('cpfF');
    var valorDiaFuncionario = document.getElementById('valorDiaF');
    var salarioFuncionario = document.getElementById('salarioF');
    var idadeFuncionario = document.getElementById('idadeF');
    nomeFuncionario.textContent = f.getNome();
    codigoFuncionario.textContent = f.getCodFuncionario().toString();
    cpfFuncionario.textContent = f.getCpf();
    valorDiaFuncionario.textContent = "R$" + f.getValorDia().toString();
    salarioFuncionario.textContent = "R$" + f.calcularSalario();
    idadeFuncionario.textContent = f.getIdade().toString();
    // --------------------------------------------------------------------------------------------------------------------------------------------
    var g = new empresa.Gerente("Oswaldo", "875.587.986-96", 324);
    g.setIdade(54);
    g.setValorDia(130);
    g.setSetor("T.I");
    var nomeGerente = document.getElementById('nomeG');
    var codigoGerente = document.getElementById('codG');
    var cpfGerente = document.getElementById('cpfG');
    var valorDiaGerente = document.getElementById('valorDiaG');
    var salarioGerente = document.getElementById('salarioG');
    var idadeGerente = document.getElementById('idadeG');
    var setorGerente = document.getElementById('setorG');
    nomeGerente.textContent = g.getNome();
    codigoGerente.textContent = g.getCodFuncionario().toString();
    cpfGerente.textContent = g.getCpf();
    valorDiaGerente.textContent = "R$" + g.getValorDia().toString();
    salarioGerente.textContent = "R$" + g.calcularSalario();
    idadeGerente.textContent = g.getIdade().toString();
    setorGerente.textContent = g.getSetor().toString();
})(empresa || (empresa = {}));
