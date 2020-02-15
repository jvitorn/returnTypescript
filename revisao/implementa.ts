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



}