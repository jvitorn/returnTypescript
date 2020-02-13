namespace empresa{
    let p = new Pessoa("joao","497.582.852-10");
    p.setIdade(30);
    let mostrarNome = document.getElementById("nome");
    let mostrarIdade = document.getElementById("idade");
    let mostrarCpf  = document.getElementById("cpf");
    

    mostrarNome.textContent = p.getNome();
    mostrarIdade.textContent = p.getIdade().toString();
    mostrarCpf.textContent = p.getCpf();
}