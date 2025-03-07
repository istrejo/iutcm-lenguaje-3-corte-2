import { Component } from '@angular/core';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-inventory',
  imports: [TableComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss',
})
export default class InventoryComponent {}
