function removerCliente() {
    var id = document.getElementById("InputId").value;
    
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if(xhttp.status = 200){
            document.getElementById("tbodyId").innerText = "";
            document.getElementById("InputId").value = "";
            document.getElementById("inputNome").value = "";
            alert("Cliente removido!");

        }
    }

    xhttp.open("DELETE", "/remove?fId=" + id);
    xhttp.send();
}