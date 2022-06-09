package com.example.shayder.service;

import com.example.shayder.model.ClienteModel;
import com.example.shayder.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteServiceImpl implements ClienteService {
    @Autowired
    private ClienteRepository clienteRepository;

    @Override
    public List<ClienteModel> getClienteByNome(String nome) {

        List<ClienteModel> retorno = clienteRepository.findByNome(nome);
        return retorno;
    }

}

