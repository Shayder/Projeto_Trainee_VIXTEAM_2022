function verificaCPF() {
    var cpf = document.getElementById('inputCpf').value;
    var Soma;
    var Resto;
    Soma = 0;
  if (cpf == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(9, 10)) ) {
        document.getElementById('inputCpf').value = ""
        document.getElementById('inputCpf').classList.remove('is-valid');
        document.getElementById('inputCpf').classList.add('is-invalid'); 
        return false;
    }

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11) ) ) {
        document.getElementById('inputCpf').value = ""
        document.getElementById('inputCpf').classList.remove('is-valid');
        document.getElementById('inputCpf').classList.add('is-invalid');
        return false;
    }
    document.getElementById('inputCpf').classList.remove('is-invalid'); 
    document.getElementById('inputCpf').classList.add('is-valid');
}


function verificaSenha() {
    var senha = document.getElementById('inputSenha').value;

    if (senha.length >= 8) {   
        document.getElementById('inputSenha').classList.remove('is-invalid'); 
        document.getElementById('inputSenha').classList.add('is-valid');
    } else { 
        document.getElementById('inputSenha').value = ""
        document.getElementById('inputSenha').classList.remove('is-valid');
        document.getElementById('inputSenha').classList.add('is-invalid');        
    }
}
