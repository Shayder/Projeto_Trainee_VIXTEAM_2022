function consultarCliente(){
    var nome = document.getElementById("inputNome").value;
    
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        document.getElementById("resposta").innerHTML = this.responseText;
    }

    xhttp.open("GET", "/consulta?fNome="+nome);
    xhttp.send();
}