package com.example.ApiCustomer.services;

import com.example.ApiCustomer.models.Client;

import java.util.List;

public interface ICustomerService {
    List<Client> getAll();
    Client getById(Long id);
    void deleteClient(Long id);
    Client saveClient(Client client);
}
