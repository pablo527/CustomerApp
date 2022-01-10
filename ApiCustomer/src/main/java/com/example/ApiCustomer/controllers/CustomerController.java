package com.example.ApiCustomer.controllers;

import com.example.ApiCustomer.models.Client;
import com.example.ApiCustomer.services.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CustomerController {
    @Autowired
    ICustomerService service;

    @GetMapping(value = "/customers")
    public List<Client> getAll(){
        return service.getAll();
    }
    @GetMapping(value = "/customers/{id}")
    public Client getById(@PathVariable String id){
       return service.getById(Long.parseLong(id));
    }
    @DeleteMapping(value = "/customers/{id}")
    public void deleteClient(@PathVariable String id){
        service.deleteClient(Long.parseLong(id));
    }

    @PostMapping(value = "/customers")
    public Client saveClient(@RequestBody Client client){
        return  service.saveClient(client);
    }
}
