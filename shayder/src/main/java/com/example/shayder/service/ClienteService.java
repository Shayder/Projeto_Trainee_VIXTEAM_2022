package com.example.shayder.service;

import com.example.shayder.model.ClienteModel;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ClienteService  {
//    List<ClienteModel> getAllCliente();
    List<ClienteModel> getClienteByNome(String nome);

}
