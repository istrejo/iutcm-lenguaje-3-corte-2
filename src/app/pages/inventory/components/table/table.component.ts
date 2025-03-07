import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Table, TableModule } from 'primeng/table';
import { InventoryService } from 'src/app/core/services/inventory.service';
import { FormComponent } from '../form/form.component';
import { CurrencyPipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-table',
  imports: [
    FormsModule,
    FormComponent,
    CurrencyPipe,
    CardModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
    ButtonModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  private inventorySvc = inject(InventoryService);
  public inventory = this.inventorySvc.inventory;
  public search: string = '';
  public loading: boolean = false;
  public displayModal: boolean = false;

  /**
   * The clear function clears the table and resets the search input.
   * @param {Table} table - The `table` parameter is an object of type `Table`, which likely represents
   * a data table or grid structure. The `clear()` method is being called on this `table` object to
   * clear its contents. Additionally, the `search` property of the current object (possibly the context
   * in which this
   */
  clear(table: Table) {
    table.clear();
    this.search = '';
  }

  /**
   * The `showForm` function sets the `displayModal` property to true.
   */
  showForm() {
    this.displayModal = true;
  }

  /**
   * The `onCloseModal` function sets the `displayModal` property based on the value of the `event`
   * parameter.
   * @param {any} event - The `event` parameter in the `onCloseModal` function is typically an object
   * that represents the event that triggered the modal to close. This object can contain information
   * such as the type of event, target element, and any additional data related to the event. It is
   * commonly used in event handling functions
   */
  onCloseModal(event: any) {
    this.displayModal = event;
  }

  /**
   * The `totalInventory` function calculates the total value of the inventory by multiplying the price
   * of each product by its quantity and summing them up.
   */
  totalInventory() {
    const total = this.inventory().reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
    alert(`El valor total de tu inventario es ${total}`);
  }
}
