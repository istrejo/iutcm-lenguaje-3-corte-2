import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Table, TableModule } from 'primeng/table';
import { FormComponent } from '../form/form.component';
import { CustomerService } from 'src/app/core/services/customer.service';
import { CardModule } from 'primeng/card';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-customer-table',
  imports: [
    CommonModule,
    FormsModule,
    FormComponent,
    CardModule,
    TableModule,
    IconField,
    InputTextModule,
    InputIconModule,
    ButtonModule,
  ],
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.scss',
})
export class CustomerTableComponent {
  private customerSvc = inject(CustomerService);
  public customers = this.customerSvc.customers;
  public search: string = '';
  public loading: boolean = false;
  public displayModal: boolean = false;

  /**
   * The clear function clears the table and resets the search input.
   * @param {Table} table - The `table` parameter is an object of type `Table`, which likely represents
   * a data table or grid structure. The `clear()` method is being called on this object to clear its
   * contents. Additionally, the `search` property of the current context is being set to an empty
   * string.
   */
  clear(table: Table) {
    table.clear();
    this.search = '';
  }

  /**
   * The function `showForm()` sets the `displayModal` property to true.
   */
  showForm() {
    this.displayModal = true;
  }

  /**
   * The `onCloseModal` function in TypeScript sets the `displayModal` property based on the value of
   * the event parameter.
   * @param {any} event - The `event` parameter in the `onCloseModal` function is typically an object
   * that represents the event that triggered the modal to close. This object can contain information
   * such as the type of event, target element, and any additional data related to the event. It is
   * commonly used in event handling functions
   */
  onCloseModal(event: any) {
    this.displayModal = event;
  }
}
