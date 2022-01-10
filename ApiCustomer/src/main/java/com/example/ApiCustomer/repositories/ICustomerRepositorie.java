package com.example.ApiCustomer.repositories;


import com.example.ApiCustomer.models.Client;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICustomerRepositorie extends CrudRepository<Client,Long> {
}
