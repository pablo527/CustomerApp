import Customer from "./Customer";

export const searchCustomer = async () => {
    let url= 'http://localhost:8081/api/customers';
    let response = await fetch(url, {
        "method": 'GET',
        "headers": {
          "Content-Type": 'application/json'
        }
      })
    
      return await response.json();
}

export const saveCustomer = async (customer:Customer) =>{ 
    let url= 'http://localhost:8081/api/customers';
    let response = await fetch(url, {
        "method": 'POST',
        "body": JSON.stringify(customer),
        "headers": {
          "Content-Type": 'application/json'
        }
      })
    
    console.log(await response.json());
}
export const deleteCustomer = async (customerId:string) => {
    let url= 'http://localhost:8081/api/customers/'+ customerId;
    await fetch(url, {
        "method": 'DELETE',
        "headers": {
          "Content-Type": 'application/json'
        }
      })
}
export const findCustomerById = async (id:string) =>{ 
    let url= 'http://localhost:8081/api/customers/' + id;
    let response = await fetch(url, {
        "method": 'GET',
        "headers": {
          "Content-Type": 'application/json'
        }
      })
      return await response.json();  
}
