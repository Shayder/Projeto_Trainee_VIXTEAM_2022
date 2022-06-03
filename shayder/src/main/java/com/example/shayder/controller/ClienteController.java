package com.example.shayder.controller;

import com.example.shayder.model.ClienteModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClienteController {

    @GetMapping("/buscar")
    public String buscar(@RequestParam(name="fnome") String nome){

        String [] bancoClientes = { "Jose", "Rodolfo", "Shayder"};

        boolean retorno = false;

        for(int i=0; i < bancoClientes.length; i++){
            if(bancoClientes[i].equalsIgnoreCase(nome)){
                retorno = true;
            }
        }

        return retorno ? "ok" : "nao";
    }

    @GetMapping("/cadastrar")
    public ClienteModel cadastrar(
            @RequestParam(name="fNome") String nome,
            @RequestParam(name="fCpf")String cpf,
            @RequestParam(name="fEmail")String email,
            @RequestParam(name="fSenha") String senha,
            @RequestParam(name="fSexo")String sexo ){

        ClienteModel Shayder = new ClienteModel(nome, cpf, email, senha, sexo);

    return Shayder;
    }
}

