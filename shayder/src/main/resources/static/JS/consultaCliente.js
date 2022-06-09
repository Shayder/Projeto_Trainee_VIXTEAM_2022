function consultarCliente() {
    var nome = document.getElementById("inputNome").value;

    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {

        if (this.responseText == "null") {
            alert("Cliente não encontrado!");
        } else {
            const clienteEncontrado = JSON.parse(this.responseText);
            for (var i = 0; i < clienteEncontrado.length; i++) {

                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                var td3 = document.createElement('td');
                var td4 = document.createElement('td');
                var td5 = document.createElement('td');
                var td6 = document.createElement('td');

                td1.appendChild(document.createTextNode(clienteEncontrado[i].id));
                tr.appendChild(td1);

                td2.appendChild(document.createTextNode(clienteEncontrado[i].nome));
                tr.appendChild(td2);

                td3.appendChild(document.createTextNode(clienteEncontrado[i].email));
                tr.appendChild(td3);

                td4.appendChild(document.createTextNode(clienteEncontrado[i].cpf));
                tr.appendChild(td4);

                td5.appendChild(document.createTextNode(clienteEncontrado[i].telefone));
                tr.appendChild(td5);

                td6.appendChild(document.createTextNode(clienteEncontrado[i].sexo));
                tr.appendChild(td6);

                document.getElementById("tbodyId").appendChild(tr);

            }
        }
    }

    xhttp.open("GET", "/consulta?fNome=" + nome);
    xhttp.send();
}

