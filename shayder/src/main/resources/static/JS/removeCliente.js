function removerCliente() {
    var id = document.getElementById("InputId").value;

    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if(xhttp.status = 200){
            alert("Cliente removido!");
        }
    }

    xhttp.open("DELETE", "/remove?fId=" + id);
    xhttp.send();
}