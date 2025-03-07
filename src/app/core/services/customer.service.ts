import { Injectable, signal } from '@angular/core';
import { Customer } from '../models/customer.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  public customers = signal<Customer[]>([]);

  /**
   * The constructor function initializes a set of customers by retrieving data from the local storage
   * and setting it to the 'customers' property.
   */
  constructor() {
    const customers = JSON.parse(localStorage.getItem('customers') || '[]');
    this.customers.set(customers);
  }

  /**
   * The `addCustomer` function adds a new customer to a list and updates the local storage with the
   * updated list.
   * @param {Customer} customer - Customer object that contains information about a customer, such as
   * name, address, contact details, etc.
   */
  public addCustomer(customer: Customer) {
    this.customers.update((prev) => [...prev, customer]);
    localStorage.setItem('customers', JSON.stringify(this.customers()));
  }
}
