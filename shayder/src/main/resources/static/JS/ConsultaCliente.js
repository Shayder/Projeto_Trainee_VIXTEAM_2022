function consultarCliente(){
    var nome = document.getElementById("inputNome").value;
    
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {

        var array = Object.keys(xhttp).map(JSON.parse(xhttp);

        var cliente = array.map(entrada => {
          return {
            'id': entrada.id,
            'nome': entrada.nome,
            'cpf' : entrada.cpf,
            'email': entrada.email,
            'senha': entrada.senha,
            'telefone': entrada.telefone,
            'sexo': entrada.sexo,
          }
        });
         document.getElementById("resposta").txtContent = cliente.entrada.cpf;
    }

    xhttp.open("GET", "/consulta?fNome="+nome);
    xhttp.send();
}