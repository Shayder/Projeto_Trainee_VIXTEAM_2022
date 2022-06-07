package com.example.shayder.controller;

import com.example.shayder.model.ClienteModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ClienteController {


    @GetMapping("/consulta")
    public String buscar(@RequestParam(name="fNome") String nome) {


        //###########SIMULAÇÃO DO BANCO##########################


        //###########SIMULAÇÃO DO BANCO##########################


//        ClienteModel clienteEncontrado = clientes.stream().filter(ClienteModel -> ClienteModel.getNome().equalsIgnoreCase(nome)).findFirst().orElse(null);

//        return clienteEncontrado!=null ? "Cliente encontrado!" : "Cliente não encontrado!";


//        String [] bancoClientes = { "Jose", "Rodolfo", "Shayder"};
//
        boolean retorno = false;
//
//        for(int i=0; i < bancoClientes.length; i++){
//            if(bancoClientes[i].equalsIgnoreCase(nome)){
//                retorno = true;
//            }
//        }
//
        return retorno ? "ok" : "nao";
    }

    @GetMapping("/cadastro")
    public String cadastrar(
            @RequestParam(name="fNome") String nome,
            @RequestParam(name="fCpf")String cpf,
            @RequestParam(name="fEmail")String email,
            @RequestParam(name="fSenha") String senha,
            @RequestParam(name="fSexo")String sexo ){



    return "Cadastrado";
    }
}

