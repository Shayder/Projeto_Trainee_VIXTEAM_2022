function consultarCliente() {
    var nome = document.getElementById("inputNome").value;

    const xhttp = new XMLHttpRequest();
    

    xhttp.onload = function () {

        if (this.responseText == "null") {
            document.getElementById("tbodyId").innerText = "";
            
            
            alert("Cliente não encontrado!");
            
        } else {
            clienteEncontrado = JSON.parse(this.responseText);
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

function completaInputModal() {
    var id = document.getElementById("InputId").value;

    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {

        if (this.responseText == "null") {
            alert("Cliente não encontrado!");
        } else {
            cliente = JSON.parse(this.responseText);

            document.getElementById("modalNome").value = cliente.nome;
            document.getElementById("modalCpf").value = cliente.cpf;
            document.getElementById("modalEmail").value = cliente.email;
            document.getElementById("modalSenha").value = cliente.senha;
            document.getElementById("modalTelefone").value = cliente.telefone;
            document.getElementById("modalSexo").value = cliente.sexo;
            }
        
    }

    xhttp.open("GET", "/consultaId?fId=" + id);
    xhttp.send();

}

function alterarCliente() {
    const xhttp = new XMLHttpRequest();

    let cliente;
    var id = document.getElementById("InputId").value;
    for (var i = 0; i < clienteEncontrado.length; i++) {
        if (clienteEncontrado[i].id == id) {
            cliente = clienteEncontrado[i];
            cliente.nome = document.getElementById("modalNome").value;
            cliente.cpf = document.getElementById("modalCpf").value;
            cliente.email = document.getElementById("modalEmail").value;
            cliente.senha = document.getElementById("modalSenha").value;
            cliente.telefone = document.getElementById("modalTelefone").value;
            cliente.sexo = document.getElementById("modalSexo").value;
            document.getElementById("tbodyId").innerText = "";
        }
    }

    xhttp.onreadystatechange = function () {
        if(xhttp.readyState == 4 && xhttp.status == 200){
            alert("Cliente alterado!");
    
        }
    }

    xhttp.open("PUT", "/altera");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(cliente));
}


