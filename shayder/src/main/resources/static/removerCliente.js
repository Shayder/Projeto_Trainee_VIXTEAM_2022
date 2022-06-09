function consultarCliente() {
    var nome = document.getElementById("inputCodigo").value;

    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {

    }

    xhttp.open("POST", "/remover?fNome=" + nome);
    xhttp.send();
}