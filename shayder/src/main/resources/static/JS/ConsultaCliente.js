function consultarCliente(){
    var nome = document.getElementById("inputNome").value;
    
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {

//        if(this.responseText=="null"){
//            document.getElementById("resposta").txtContent = "Cliente não encontrado!";
//        }else{
            document.getElementById("resposta").textContent = this.responseText;
//        }

    }

    xhttp.open("GET", "/consulta?fNome="+nome);
    xhttp.send();
}