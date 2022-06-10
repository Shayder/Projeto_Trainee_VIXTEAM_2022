function removerCliente() {
    var id = document.getElementById("InputId").value;
    
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
            document.getElementById("InputId").value = "";
            document.getElementById("inputNome").value = "";
            document.getElementById("tbodyId").innerText = "";
    }

    xhttp.open("DELETE", "/remove?fId=" + id);
    xhttp.send();
}