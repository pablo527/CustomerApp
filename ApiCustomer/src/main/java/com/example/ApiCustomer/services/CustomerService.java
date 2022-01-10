package com.example.ApiCustomer.services;

import com.example.ApiCustomer.models.Client;
import com.example.ApiCustomer.repositories.ICustomerRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService implements ICustomerService{
    @Autowired
    ICustomerRepositorie repositorie;

    @Override
    public List<Client> getAll() {
        System.out.println(repositorie.findById(1L));
        return (List<Client>) repositorie.findAll();
    }

    @Override
    public Client getById(Long id) {
        return (Client) repositorie.findById(id).get();
    }

    @Override
    public void deleteClient(Long id) {
        repositorie.deleteById(id);
    }

    @Override
    public Client saveClient(Client client) {
        return repositorie.save(client);
    }
}
