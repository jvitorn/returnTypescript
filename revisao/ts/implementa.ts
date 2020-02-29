namespace empresa{
    //definindo uma nova pessoa 
    const p = new Pessoa("joao","497.582.852-10");
    p.setIdade(30);
    //capturando elementos por id
    let mostrarNome = document.getElementById("nome");
    let mostrarIdade = document.getElementById("idade");
    let mostrarCpf  = document.getElementById("cpf");
    

    mostrarNome.textContent = p.getNome();
    mostrarIdade.textContent = p.getIdade().toString();
    mostrarCpf.textContent = p.getCpf();
//--------------------------------------------------------------------------------------------------------------------------------------------------
    const c = new Cliente ('Wellington Orelha',"120.120.120.00",120); 
    c.setIdade(50);
    c.setLimite(3000);
    c.setSaldo(2000);
    //vars
    let nomeCliente = document.getElementById('nomeC');
    let cpfCliente  = document.getElementById('cpfC');
    let idadeCliente = document.getElementById('idadeC');
    let codigoCliente = document.getElementById('codC');
    let limiteCliente = document.getElementById('limiteC');
    let saldoCliente = document.getElementById('saldoC');

    nomeCliente.textContent = c.getNome();
    cpfCliente.textContent = c.getCpf();
    idadeCliente.textContent = c.getIdade().toString();
    codigoCliente.textContent = c.getCodCliente().toString();
    limiteCliente.textContent = c.getLimite().toString();
    saldoCliente.textContent = c.getSaldo().toString();
// --------------------------------------------------------------------------------------------------------------------------------------------
    const f = new Funcionario("Claudio Dollynho","458.589.478-58",456);
    f.setIdade(32);
    f.setValorDia(100);
    //vars
    let nomeFuncionario = document.getElementById('nomeF');
    let codigoFuncionario = document.getElementById('codF');
    let cpfFuncionario = document.getElementById('cpfF');
    let valorDiaFuncionario = document.getElementById('valorDiaF');
    let salarioFuncionario = document.getElementById('salarioF');
    let idadeFuncionario = document.getElementById('idadeF');

    nomeFuncionario.textContent = f.getNome();
    codigoFuncionario.textContent = f.getCodFuncionario().toString();
    cpfFuncionario.textContent = f.getCpf();
    valorDiaFuncionario.textContent = "R$" + f.getValorDia().toString();
    salarioFuncionario.textContent = "R$" + f.calcularSalario();
    idadeFuncionario.textContent = f.getIdade().toString();
// --------------------------------------------------------------------------------------------------------------------------------------------
    const g = new Gerente("Oswaldo","875.587.986-96",324);
    g.setIdade(54);
    g.setValorDia(130);
    g.setSetor("T.I");
    //vars
    let nomeGerente = document.getElementById('nomeG');
    let codigoGerente = document.getElementById('codG');
    let cpfGerente = document.getElementById('cpfG');
    let valorDiaGerente = document.getElementById('valorDiaG');
    let salarioGerente = document.getElementById('salarioG');
    let idadeGerente = document.getElementById('idadeG');
    let setorGerente = document.getElementById('setorG');

    nomeGerente.textContent = g.getNome();
    codigoGerente.textContent = g.getCodFuncionario().toString();
    cpfGerente.textContent = g.getCpf();
    valorDiaGerente.textContent = "R$" + g.getValorDia().toString();
    salarioGerente.textContent = "R$" + g.calcularSalario();
    idadeGerente.textContent = g.getIdade().toString();
    setorGerente.textContent = g.getSetor().toString();
// --------------------------------------------------------------------------------------------------------------------------------------------
    const e = new Empresa();
    e.setNomeEmpresa('JonatasCorp');
    e.setCidade("Umbrella");
    e.setAtividade('T.I');
    e.addCliente(c); 
    e.addFuncionario(f);
    e.addFuncionario(g); 
    //vars
    let nomeEmpresa = document.getElementById('nomeE');
    let cidadeEmpresa = document.getElementById('cidadeE');
    let atividadeEmpresa = document.getElementById('atividadeE');
    let tbFuncionario = document.getElementById('tbFuncionario');

    nomeEmpresa.textContent = e.getNomeEmpresa();
    cidadeEmpresa.textContent = e.getCidade();
    atividadeEmpresa.textContent = e.getAtividade();

    e.getFuncionario().forEach(e => {
        let nomeGerenteEmpresa = e.getNome();
        if(e instanceof Gerente){
            nomeGerenteEmpresa += " - Gerente";
        }
        tbFuncionario.innerHTML += "<tr><td>"+nomeGerenteEmpresa+"</td><td>"+e.getCodFuncionario()+"</td></tr>";
    });
    

}