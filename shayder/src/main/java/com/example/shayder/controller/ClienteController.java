package com.example.shayder.controller;

import com.example.shayder.model.ClienteModel;
import com.example.shayder.repository.ClienteRepository;
import com.example.shayder.service.ClienteService;
import com.example.shayder.service.ClienteServiceImpl;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping
public class ClienteController {

    @Autowired
    private ClienteServiceImpl clienteService;
    @Autowired
    private ClienteRepository clienteRepository;

    @RequestMapping(value = "/consulta",method = RequestMethod.GET)
    @ResponseBody
    public String buscar(@RequestParam(name = "fNome")String nome){

        List<ClienteModel> clientes = clienteService.getClienteByNome(nome);

        JSONObject clienteJson = null;
        if(!clientes.isEmpty()){
            clienteJson = new JSONObject(clientes.get(0));
        }
        return !clientes.isEmpty() ? clienteJson.toString() : "null";
    }
//    @RequestMapping(value="/consultaBuscar", method = RequestMethod.GET)
//    public Iterable<ClienteModel> form() {
//        Iterable<ClienteModel>usuarioModels = clienteRepository.findAll();
//        return usuarioModels;
//    }


    @RequestMapping("/cadastro")
    public String cadastrar(
            @RequestParam(name="fNome") String nome,
            @RequestParam(name="fCpf")String cpf,
            @RequestParam(name="fEmail")String email,
            @RequestParam(name="fSenha") String senha,
            @RequestParam(name="fTelefone") String telefone,
            @RequestParam(name="fSexo")String sexo ){

        ClienteModel cliente = new ClienteModel();
        cliente.setNome(nome);
        cliente.setCpf(cpf);
        cliente.setEmail(email);
        cliente.setSenha(senha);
        cliente.setTelefone(telefone);
        cliente.setSexo(sexo);
        clienteRepository.save(cliente);

    return "Cadastrado";
    }
}

