package com.example.shayder.controller;


import com.example.shayder.model.ClienteModel;
import com.example.shayder.repository.ClienteRepository;
import com.example.shayder.service.ClienteServiceImpl;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class ClienteController {

    @Autowired
    private ClienteServiceImpl clienteService;
    @Autowired
    private ClienteRepository clienteRepository;

    @GetMapping("/consulta")
    public String buscar(@RequestParam(name = "fNome")String nome){

        List<ClienteModel> clientes = clienteService.getClienteByNome(nome);

        JSONObject clienteJson = null;
        if(!clientes.isEmpty()){
            clienteJson = new JSONObject(clientes.get(0));
        }
        return !clientes.isEmpty() ? clienteJson.toString() : "null";
    }

//    @GetMapping("/cadastro")
//    public String cadastrar(
//            @RequestParam(name="fNome") String nome,
//            @RequestParam(name="fCpf")String cpf,
//            @RequestParam(name="fEmail")String email,
//            @RequestParam(name="fSenha") String senha,
//            @RequestParam(name="fSexo")String sexo ){
//
//
//
//    return "Cadastrado";
//    }
}

